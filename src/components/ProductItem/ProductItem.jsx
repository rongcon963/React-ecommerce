import styles from './styles.module.scss';
// import reloadIcon from '@icons/svgs/reloadIcon.svg';
// import heartIcon from '@icons/svgs/heart.svg';
// import cartIcon from '@icons/svgs/cartIcon.svg';
// import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@contexts/SideBarProvider';
import { ToastContext } from '@contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import { LiaEyeSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
  slideItem = false
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get('userId');
  const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,
    largeImg,
    isActiveSize,
    btnClear
  } = styles;

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart!');

      return;
    }

    if (!sizeChoose) {
      toast.warning('Please choose size!');
      return;
    }

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose
    };

    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        toast.success('Add product to cart successfully!');
        setIsLoading(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((error) => {
        toast.success('Add product to cart failed!');
        setIsLoading(false);
      });
  };

  const handleShowDetailProductSidebar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };

  const handleNavigateToDetail = () => {
    const path = `/product/${details._id}`;
    navigate(path);
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  useEffect(() => {
    if (slideItem) {
      setIsShowGrid(true);
    }
  }, [slideItem]);

  return (
    <div
      className={isShowGrid ? '' : containerItem}
      style={{
        cursor: 'pointer'
      }}
    >
      <div
        className={cls(boxImg, { [largeImg]: !isShowGrid })}
        onClick={handleNavigateToDetail}
      >
        <img src={src} alt={name} />
        <img src={prevSrc} alt={name} className={showImgWhenHover} />

        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            {/* <img src={cartIcon} alt='' /> */}
            <LiaShoppingBagSolid style={{ fontSize: '20px' }} />
          </div>
          <div className={boxIcon}>
            {/* <img src={heartIcon} alt='' /> */}
            <CiHeart style={{ fontSize: '25px' }} />
          </div>
          <div className={boxIcon}>
            {/* <img src={reloadIcon} alt='' /> */}
            <TfiReload style={{ fontSize: '20px' }} />
          </div>
          <div className={boxIcon} onClick={handleShowDetailProductSidebar}>
            {/* <img src={eyeIcon} alt='' /> */}
            <LiaEyeSolid style={{ fontSize: '23px' }} />
          </div>
        </div>
      </div>

      <div className={isShowGrid ? '' : content}
        style={{
          marginTop: slideItem && '10px'
        }}
      >
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            Clear
          </div>
        )}

        <div
          className={cls(title, {
            [textCenter]: !isHomePage
          })}
        >
          {name}
        </div>
        {!isHomePage && (
          <div
            className={textCenter}
            style={{
              color: '#888'
            }}
          >
            Brand 01
          </div>
        )}
        <div
          className={cls(priceCl, {
            [textCenter]: !isHomePage
          })}
          style={{
            color: isHomePage ? '#333' : '#888'
          }}
        >
          ${price}
        </div>
        {!isHomePage && (
          <div
            className={cls(boxBtn, {
              [leftBtn]: !isShowGrid
            })}
          >
            <Button
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
