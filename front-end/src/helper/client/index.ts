import Axios, { AxiosRequestConfig, Method } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL!;

interface ClientParamType {
  path: string;
  method: Method;
  data?: object;
  contentType?: string;
}

export const Client = async (params: ClientParamType) => {
  const { path, method, data } = params;
  const headers = {
    'Content-Type': 'application/json',
  };

  let url = `${baseURL}${path}`;

  const requestBody: AxiosRequestConfig = {
    method,
    url,
    data,
    headers,
    responseType: 'json',
  };
  try {
    const response = await Axios(requestBody);
    const result = response && response.data;
    return result;
  } catch (error) {
    throw error;
  }
};
