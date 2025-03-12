import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
  productId,
  userId
}) {
  const {
    container,
    boxContent,
    title,
    size,
    price,
    boxClose,
    overlayLoading
  } = styles;
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProductsCart } = useContext(SideBarContext);

  const handleRemoveItem = () => {
    setIsDelete(true);
    deleteItem({ productId, userId })
      .then((res) => {
        console.log(res);
        setIsDelete(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((error) => {
        console.log(error);
        setIsDelete(false);
      });
  };

  return (
    <div className={container}>
      <img
        src={src} //'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
        alt=''
      />

      <div className={boxClose} onClick={handleRemoveItem}>
        <IoClose
          style={{
            fontSize: '25px',
            color: '#c1c1c1'
          }}
        />
      </div>

      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>Size: {sizeProduct}</div>
        <div className={price}>
          {quantity} x ${priceProduct}
        </div>
        <div className={price}>SKU: {skuProduct}</div>
      </div>

      {isDelete && (
        <div className={overlayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default ItemProduct;
