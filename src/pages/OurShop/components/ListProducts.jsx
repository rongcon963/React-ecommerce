import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import { OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';
import styles from '../styles.module.scss';

function ListProducts() {
  const { containerProduct } = styles;
  const { products, isShowGrid } = useContext(OurShopContext);

  return (
    <>
      <MainLayout>
        <div className={isShowGrid ? containerProduct : ''}>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
              details={item}
              isHomePage={false}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default ListProducts;
