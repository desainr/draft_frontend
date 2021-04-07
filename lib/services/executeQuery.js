import { getRequest } from '../http';
import { buildQuery } from '../utils';

const reqUrl = 'https://nfl-draft-api.azurewebsites.net/api/draft_filter?code=aVIdIa9bNR2Dgc3eRzS1Sh9jHvFShHIqeguFXLQvUOOHjuGvyjRWOA==';

const executeQuery = async (queryObj) => {
  const query = buildQuery(queryObj);

  const fullUrl = `${reqUrl}?${query}`;

  return getRequest(fullUrl);
};

export default executeQuery;
