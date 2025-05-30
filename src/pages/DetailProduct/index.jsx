import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu';
import { useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import Footer from '@components/Footer/Footer';
import SliderCommon from '@components/SliderCommon/SliderCommon';

function DetailProduct() {
  const {
    container,
    navigationSection,
    contentSection,
    imageBox,
    infoBox,
    price,
    description,
    titleSize,
    boxSize,
    size,
    functionInfo,
    boxBtn,
    incrementAmount,
    orSection,
    addFunc,
    info
  } = styles;

  const [menuSelected, setMenuSelected] = useState(1);

  const dataAccordionMenu = [
    {
      id: 1,
      titleMenu: 'ADDITIONAL INFORMATION',
      content: <InformationProduct />
    },
    {
      id: 2,
      titleMenu: 'REVIEWS (0)',
      content: <ReviewProduct />
    }
  ];

  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
  };

  const tempData = [
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'Product Name 1',
      price: '1000',
      size: [
        {
          name: 'L'
        },
        {
          name: 'M'
        },
        {
          name: 'S'
        }
      ]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'Product Name 1',
      price: '1000',
      size: [
        {
          name: 'L'
        },
        {
          name: 'M'
        },
        {
          name: 'S'
        }
      ]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'Product Name 1',
      price: '1000',
      size: [
        {
          name: 'L'
        },
        {
          name: 'M'
        },
        {
          name: 'S'
        }
      ]
    }
  ];

  return (
    <div>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={navigationSection}>
            <div>Home {'>'} Menu</div>
            <div className={''} style={{ cursor: 'pointer' }}>
              {'<'} Return to previous page
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='image'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='image'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='image'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='image'
              />
            </div>
            <div className={infoBox}>
              <h2>Title Product</h2>
              <p className={price}>$1,879.99</p>
              <p className={description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <p className={titleSize}>Size</p>
              <div className={boxSize}>
                <div className={size}>L</div>
                <div className={size}>M</div>
                <div className={size}>S</div>
              </div>

              <div className={functionInfo}>
                <div className={incrementAmount}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>

                <div className={boxBtn}>
                  <Button content={'ADD TO CART'} />
                </div>
              </div>

              <div className={orSection}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <Button content={'Buy Now'} />
              </div>

              <div className={addFunc}>
                <div>
                  <CiHeart />
                </div>

                <div>
                  <TfiReload />
                </div>
              </div>

              <div>
                <PaymentMethods />
              </div>

              <div className={info}>
                <div>
                  Brand: <span>Brand #3</span>
                </div>

                <div>
                  SKU: <span>87654</span>
                </div>

                <div>
                  Category: <span>Men</span>
                </div>
              </div>

              {dataAccordionMenu.map((item, index) => {
                return (
                  <AccordionMenu
                    key={index}
                    titleMenu={item.titleMenu}
                    contentJsx={item.content}
                    onClick={() => handleSetMenuSelected(item.id)}
                    isSelected={menuSelected === item.id}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h2>Related Product</h2>

            <SliderCommon data={tempData} isProductItem showItem={4} />
          </div>
        </MainLayout>
      </div>

      <Footer />
    </div>
  );
}

export default DetailProduct;
