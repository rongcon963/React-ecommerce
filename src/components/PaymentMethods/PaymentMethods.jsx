import styles from './styles.module.scss';

function PaymentMethods() {
  const { containerMethod, titleMethod, boxImgMethod, imgMethod, textSecure } =
    styles;

  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
  ];

  return (
    <>
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
    </>
  );
}

export default PaymentMethods;
