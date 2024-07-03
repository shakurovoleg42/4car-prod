import NewsPage from '../../../components/templates/NewsPage';

export default function SingleNews({ params }) {
  return <NewsPage id={params.id} />;
}
