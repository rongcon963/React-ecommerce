import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIosNew />
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <>
              {isProductItem ? (
                <ProductItem
                  src={item.image}
                  prevSrc={item.image}
                  name={item.name}
                  price={item.price}
                  details={item}
                  isHomePage={false}
                  slideItem
                />
              ) : (
                <img key={index} src={item} alt='text' />
              )}
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderCommon;
