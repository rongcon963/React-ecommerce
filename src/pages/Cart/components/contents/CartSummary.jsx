import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingCart from '../Loading';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';

const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    totals,
    space,
    containerRight
  } = styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);

  const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTALS</div>

        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>${total.toFixed(2)}</div>
        </div>

        <div className={cls(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>${total.toFixed(2)}</div>
        </div>

        <Button content={'PROCEED TO CHECKOUT'} />
        <div className={space} />
        <Button content={'CONTINUE SHOPPING'} isPrimary={false} />

        {isLoading && <LoadingCart />}
      </div>

      <PaymentMethods />
    </div>
  );
};

export default CartSummary;
