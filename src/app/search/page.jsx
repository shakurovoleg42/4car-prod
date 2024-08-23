import { getSearchData } from '../actions';
import SearchDiski from '@/components/SearchDiski/SearchDiski';

export default async function SearchRims({ searchParams }) {
  const data = await getSearchData(searchParams.query, searchParams.page);

  return (
    <SearchDiski
      query={searchParams.query}
      diska={data.products.data}
      pagination={data.products.pagination}
    />
  );
}
