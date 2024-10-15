import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProduct';

function HomePage() {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProducts />
      </div>
    </>
  );
}

export default HomePage;
