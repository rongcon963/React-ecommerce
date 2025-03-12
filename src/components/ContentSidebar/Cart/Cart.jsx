import { CiHeart } from 'react-icons/ci';
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
  const { container, total, boxBtn, containerListProductCart, overlayLoading } =
    styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);

  return (
    <div className={container}>
      <div>
        <HeaderSidebar
          icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
          title='CART'
        />

        <div className={containerListProductCart}>
          {isLoading ? (
            <LoadingTextCommon />
          ) : (
            listProductCart.map((item, index) => {
              return (
                <ItemProduct
                  key={index}
                  src={item.images[0]}
                  nameProduct={item.name}
                  priceProduct={item.price}
                  skuProduct={item.sku}
                  sizeProduct={item.size}
                  quantity={item.quantity}
                  productId={item.productId}
                  userId={item.userId}
                />
              );
            })
          )}
        </div>
      </div>

      <div>
        <div className={total}>
          <p>SUBTOTAL:</p>
          <p>$199.99</p>
        </div>

        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
