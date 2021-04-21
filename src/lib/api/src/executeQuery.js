import { getRequest } from '@/lib/api/src/http';

const reqUrl = 'https://nfl-draft-api.azurewebsites.net/api/draft_filter?code=aVIdIa9bNR2Dgc3eRzS1Sh9jHvFShHIqeguFXLQvUOOHjuGvyjRWOA==';

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
