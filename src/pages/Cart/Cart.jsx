import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Steps from '@pages/Cart/components/steps/Steps';
import Contents from '@pages/Cart/components/contents/Contents';
import styles from './styles.module.scss';

function Cart() {
  const { container } = styles;

  return (
    <>
      <Header />
      <div className={container}>
        <Steps />
        <Contents />
      </div>
      <Footer />
    </>
  );
}

export default Cart;
