const getProductIds = () => {
  const cart = JSON.parse(localStorage.getItem('react-use-cart'));
  const productIds = cart.items?.map((item) => item.id);

  return productIds;
};

export default getProductIds;
