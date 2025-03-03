import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true
}) {
  const { isShowGrid } = useContext(OurShopContext);

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
  } = styles;

  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
        <img src={src} alt={name} />
        <img src={prevSrc} alt={name} className={showImgWhenHover} />

        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>

      <div className={isShowGrid ? '' : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div key={index} className={size}>
                  {item.name}
                </div>
              );
            })}
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
          <div className={cls(boxBtn, { [leftBtn]: !isHomePage && !isShowGrid })}>
            <Button content={'ADD TO CART'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
