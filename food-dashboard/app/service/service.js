const BASE_URL = 'https://62f8b754e0564480352bf3de.mockapi.io/food';

let getListFoodApi = () => {
  return axios({
    url: BASE_URL,
    method: 'GET',
  });
};

let deleteFoodApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: 'DELETE',
  });
};

let createFoodApi = (dataFood) => {
  return axios({
    url: BASE_URL,
    method: 'POST',
    data: dataFood,
  });
};

let getDeatailFoodApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: 'GET',
  });
};

let foodSerV = {
  getListFoodApi,
  deleteFoodApi,
  createFoodApi,
  getDeatailFoodApi,
};

export default foodSerV;
