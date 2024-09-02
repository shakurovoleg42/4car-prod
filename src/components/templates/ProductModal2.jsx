import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import CardShini from './Cards';

const ProductModal2 = ({ shina = [] }) => {
  return (
    <div className='flex gap-4 w-full flex-col items-center mt-10'>
      <Slider
        className='flex gap-4 w-full flex-wrap ml-5 mb-10 mt-4 justify-center moreOptions'
        dots={false}
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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {shina.map((item) => (
          <div key={item.id}>
            <CardShini {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductModal2;
