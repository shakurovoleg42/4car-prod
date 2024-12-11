import Card from './Cards';

const History = ({ data }) => {
  const date = new Date();
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = formatNumber(date.getFullYear() % 100);
  const formattedDate = `${day}.${month}.${year}`;

  const shina = data;

  if (!shina || !Array.isArray(shina) || shina.length === 0) {
    return <div>Нет доступных продуктов</div>;
  }

  return (
    <>
      <div className='flex gap-4 flex-col items-center w-full justify-center p-5'>
        <div className='flex gap-4 w-full flex-wrap mb-10 mt-4 justify-center'>
          {shina.map((e) => {
            const products = JSON.parse(e.products);

            return products.map((p) => (
              <Card key={p.id} status={e.status_id} data={formattedDate} {...p} />
            ));
          })}
        </div>
      </div>
    </>
  );
};

export default History;
