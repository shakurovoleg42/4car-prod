import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import CardShini from './Cards';

const ProductModal2 = ({ shina }) => {
  return (
    <div className='flex gap-4 w-full flex-col items-center mt-10'>
      {/* <div className='flex gap-4 w-full flex-wrap mb-10 mt-4 justify-center moreOptions'> */}
      <Slider
        className='flex gap-4 w-full flex-wrap ml-5 mb-10 mt-4 justify-center moreOptions'
        dots={true}
        autoplay={true}
        infinite={true}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ]}
      >
        {shina.map((item) => (
          <div key={item.id}>
            <CardShini
              img={item.image}
              type={item.name}
              character={item.name}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
    // </div>
  );
};

export default ProductModal2;
