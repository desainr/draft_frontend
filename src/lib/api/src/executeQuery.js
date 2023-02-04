import { getRequest } from '@/lib/api/src/http';

const reqUrl = 'https://draftqlapi.azurewebsites.net/api/draft_filter?code=dpGEAebwFVcOPu5uu5XnR1szsey5eyOnxQfWIxjhw4J6AzFuZP317g==';

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
