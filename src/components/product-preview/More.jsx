import styles from './styles.module.sass';

import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import Link from 'next/link';

import { formattedPrice } from '@/utils/price';
import useCart from '@/hooks/useCart';

const ProductMore = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMore style={{ fill: '#1a6ec1' }} />}>
        Подробно
      </AccordionSummary>
      <AccordionDetails>
        <div className='flex justify-center gap-2'>
          <span>Артикул:</span>
          <b>{product.sku}</b>
        </div>
        <div className='flex justify-center gap-2'>
          <span>Произодитель:</span>
          <Link href={`/${product.brand_slug}`} className={styles.hyperlink}>
            {product.brand}
          </Link>
        </div>
        <strong className={styles.price}>
          {formattedPrice(product.price)} тг
        </strong>
        <div className={styles.cart}>
          <div className={styles.quantity}>
            <input
              type='number'
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
          <button
            className={styles.btn}
            onClick={() => addToCart(product, quantity)}
          >
            В КОРЗИНУ
          </button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductMore;
