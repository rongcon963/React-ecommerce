import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

function HomePage() {
  const { container } = styles;
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10
    };

    getProducts(query).then((res) => {
      setListProducts(res.contents);
    });
    // async function fetchData() {
    //   const res = await getProducts();
    //   console.log('prod', res)
    //   setListProducts(res.contents);
    // }
    // fetchData()
  }, []);

  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProducts data={listProducts.slice(0, 2)} />
        <PopularProduct data={listProducts.slice(2, listProducts.length)} />
        <SaleHomePage />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
