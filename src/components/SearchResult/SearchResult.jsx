import styles from './styles.module.sass';

import { MdOutlineSwipeUp } from 'react-icons/md';
import useSWR from 'swr';
import Link from 'next/link';
// import Image from 'next/image';

import { getSearchData } from '@/app/actions';
import { formattedPrice } from '@/utils/price';
import Spinner from '../custom/Spinner';

const SearchResult = ({ query }) => {
  const { data, isLoading } = useSWR(
    query ? `/search?query=${query}` : null,
    () => getSearchData(query)
  );
  const products = data?.products.data;

  return (
    <div className={styles.menu}>
      {isLoading ? (
        <Spinner width={10} height={10} />
      ) : (
        <div
          className={styles.items}
          style={{ marginTop: products.length > 4 ? '-40px' : 0 }}
        >
          {products.length > 4 && (
            <MdOutlineSwipeUp size={30} className={styles.icon} />
          )}
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/${product.slug}`}
              className={styles.item}
            >
              <div className={styles.img}>
                <img src={product.image} alt='' width={60} height={60} />
              </div>
              <div className={styles.details}>
                <h2>{product.name}</h2>
                <span>Артикул: {product.id}</span>
                <strong>{formattedPrice(product.price)} тг</strong>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
