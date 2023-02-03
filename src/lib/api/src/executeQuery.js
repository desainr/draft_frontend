import { getRequest } from '@/lib/api/src/http';

const reqUrl = 'https://draftqlapi.azurewebsites.net/api/draft_filter?code=-_pDxPluI8HvlCTHp0GqHBu06X7QUHHzbR2HNcakN9cAAzFuHW1qiA==';

/**
 * @param query Query
 * @returns data []
 */
const executeQuery = async (query) => {
  const fullUrl = `${reqUrl}&${query}`;

  const res = await getRequest(fullUrl);

  return res.data;
};

export default executeQuery;
