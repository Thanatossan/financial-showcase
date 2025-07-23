// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
export const request = async (
  path: string,
  method: string,
  body?: any,
  reqHeader?: object,
  params?: any
) => {
  try {
    const headers: any = {
      'Content-Type': 'application/json',
      ...reqHeader,
    };
    const resultMethod = method || 'GET';
    const response = await axios({
      method: resultMethod,
      url: path,
      data: JSON.stringify(body),
      params,
      headers: headers,
    });

    return response.data;
  } catch (error: any | AxiosError) {
    throw error.message;
  }
};
