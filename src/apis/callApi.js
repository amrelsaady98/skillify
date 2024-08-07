import axios from "axios";

const BASE_URL = "https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/";

export const callAPI = async (method, endpoint, data = null) => {
  const config = {
    url: `${BASE_URL}${endpoint}`,
    method,
    data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
