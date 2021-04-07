import axios from 'axios';

const getRequest = async (url) => {
  return axios.get(url);
};

export {
  getRequest,
};
