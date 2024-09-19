import styles from './styles.module.sass';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const ProductDetails = ({ product }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore style={{ fill: '#1a6ec1' }} />}>
        Характеристики
      </AccordionSummary>
      <AccordionDetails>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Модель шины</td>
              <td>{product.model}</td>
            </tr>
            <tr>
              <td>Ширина шины</td>
              <td>{product.width}</td>
            </tr>
            <tr>
              <td>Высота</td>
              <td>{product.height}</td>
            </tr>
            <tr>
              <td>Диаметр шины</td>
              <td>{product.diameter}</td>
            </tr>
            <tr>
              <td>Сезонность</td>
              <td>{product.season}</td>
            </tr>
            <tr>
              <td>Шипы</td>
              <td>{product.spikes}</td>
            </tr>
            <tr>
              <td>Индекс нагрузки</td>
              <td>{product.indeks_nagruzki}</td>
            </tr>
            <tr>
              <td>Индекс скорости</td>
              <td>{product.indeks_skorosti}</td>
            </tr>
            <tr>
              <td>RunFlat</td>
              <td>{product.run_flat}</td>
            </tr>
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductDetails;
