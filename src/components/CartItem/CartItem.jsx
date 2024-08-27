import styles from './styles.module.sass';

import { useCart } from 'react-use-cart';
import Image from 'next/image';

import { formattedPrice } from '@/utils/price';

const CartItem = ({ item }) => {
  const { updateItemQuantity } = useCart();

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={item.image} alt='' width={100} height={100} />
      </div>
      <div className={styles.details}>
        <div className={styles.column}>
          <b>Наименование</b>
          <p>{item.name}</p>
        </div>
        <div className={styles.column}>
          <b>Бренд</b>
          <strong>{item.brand}</strong>
        </div>
        <div className={styles.column}>
          <b>Цена</b>
          <span>{formattedPrice(item.price)} тг</span>
        </div>
        <div className={styles.column}>
          <b>Количество</b>
          <div className={styles.quantity}>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.column}>
          <b>Стоимость</b>
          <span>{formattedPrice(item.price * item.quantity)} тг</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
