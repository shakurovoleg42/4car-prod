import Slider from 'react-slick';
import CardShini from './Cards';
import Complect from '../../assets/complect.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductModal2 = () => {
  const shina = [
    {
      id: 1,
      img: Complect,
      type: 'Шины BOTO Genesys 208',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 2,
      img: Complect,
      type: 'Шины BOTO Genesys 209',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 3,
      img: Complect,
      type: 'Шины BOTO Genesys 210',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 4,
      img: Complect,
      type: 'Шины BOTO Genesys 211',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 5,
      img: Complect,
      type: 'Шины BOTO Genesys 212',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 6,
      img: Complect,
      type: 'Шины BOTO Genesys 20218',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 7,
      img: Complect,
      type: 'Шины BOTO Genesys 2018',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 8,
      img: Complect,
      type: 'Шины BOTO Genesys 2308',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 9,
      img: Complect,
      type: 'Шины BOTO Genesys 4208',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
    {
      id: 10,
      img: Complect,
      type: 'Шины BOTO Genesys 5208',
      character: '155/70 R12 73T',
      price: '13 150 тг',
    },
  ];



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
              img={item.img}
              type={item.type}
              character={item.character}
              price={item.price}
              status={item.status}
              none={item.none}
            />
          </div>
        ))}
      </Slider>
    </div>
    // </div>
  );
};

export default ProductModal2;
