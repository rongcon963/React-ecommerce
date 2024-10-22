import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
  const { container } = styles;
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
    // async function fetchData() {
    //   const res = await getProducts();
    //   console.log('prod', res)
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
        <div
          style={{
            height: '200px'
          }}
        ></div>
      </div>
    </>
  );
}

export default HomePage;
