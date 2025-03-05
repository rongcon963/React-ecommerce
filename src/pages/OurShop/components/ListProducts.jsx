import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import { OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function ListProducts() {
  const { containerProduct } = styles;
  const { products, isShowGrid, isLoading } = useContext(OurShopContext);

  return (
    <>
      <MainLayout>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
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
            <div
              style={{
                width: '180px',
                margin: '50px auto',
              }}
            >
              <Button content={'LOAD MORE PRODUCT'} />
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
}

export default ListProducts;
