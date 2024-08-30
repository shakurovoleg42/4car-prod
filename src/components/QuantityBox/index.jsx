const QuantityBox = ({ quantity, dec, inc }) => {
  return (
    <div className='flex gap-3 text-white'>
      <button
        className='active:bg-blue-700 rounded px-2 text-lg text-xs text-white outline-none border border-white'
        onClick={dec}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className='active:bg-blue-700 rounded px-2 text-lg text-xs text-white outline-none border border-white'
        onClick={inc}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
