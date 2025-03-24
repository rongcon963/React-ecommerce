import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';

function Contents() {
  const {
    containerContents,
    boxFooter,
    boxCoupon,
    boxBtnDelete,
    boxBtnDeleteIcon
  } = styles;

  return (
    <div className={containerContents}>
      <div>
        <CartTable />

        <div className={boxFooter}>
          <div className={boxCoupon}>
            <input type='text' placeholder='Coupon code' />
            <Button content={'OK'} isPrimary={false} />
          </div>

          <div className={boxBtnDelete}>
            <Button
              content={
                <div>
                  <span className={boxBtnDeleteIcon}>&#128465;</span> CLEAR
                  SHOPPING CART
                </div>
              }
              isPrimary={false}
            />
          </div>
        </div>
      </div>

      <CartSummary />
    </div>
  );
}

export default Contents;
