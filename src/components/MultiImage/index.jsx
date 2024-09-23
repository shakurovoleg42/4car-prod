import Image from 'next/image';

const MultiImage = ({ images, setImage }) => {
  return (
    <div className='grid grid-cols-3 place-items-center mt-5'>
      {images.map((image, index) => (
        <div
          key={index}
          className='w-[75px] h-[75px] flex cursor-pointer'
          onClick={() => setImage(images[index])}
        >
          <Image
            src={image}
            alt=''
            className='object-contain'
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiImage;
