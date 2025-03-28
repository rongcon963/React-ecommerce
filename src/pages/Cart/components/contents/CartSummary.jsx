import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingCart from '../Loading';

const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    totals,
    space,
    containerMethod,
    titleMethod,
    containerRight,
    boxImgMethod,
    imgMethod,
    textSecure
  } = styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);

  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
  ];

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

      <div className={containerMethod}>
        <div className={titleMethod}>
          Guaranteed <span>safe</span> checkout
        </div>

        <div className={boxImgMethod}>
          {srcMethods.map((src, index) => {
            return (
              <img src={src} alt={src} className={imgMethod} key={index} />
            );
          })}
        </div>
      </div>

      <div className={textSecure}>Your Payment is 100% Secure</div>
    </div>
  );
};

export default CartSummary;
