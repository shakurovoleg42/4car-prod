const DescriptionModal = ({product_fullDescription}) => {
  return (
    <>
      <div className='mt-10 mb-10'>
        <div className='font-forms flex flex-col gap-7'>
          <div
            className='mt-3'
            dangerouslySetInnerHTML={{ __html: product_fullDescription }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default DescriptionModal;
