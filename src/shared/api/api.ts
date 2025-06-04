import axios from 'axios'
import { apiUrl } from '@app/global/variables'

export const fetchData = async <T>(
  endpoint: string,
  params: Record<string, string> = {},
  fields: string[] = []
): Promise<T> => {
  try {
    const fieldsParam = fields.length ? `?fields=${fields.join(',')}` : '';
    const paramsString = Object.entries(params)
      .map(([key, value]) => `/${key}/${value}`)
      .join('');

    const url = `${apiUrl}/${endpoint}${paramsString}${fieldsParam}`;
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error(`Ошибка при запросе к ${endpoint}:`, errorMessage);
      throw new Error(errorMessage);
    }
    throw new Error('Возникла неизвестная ошибка!');
  }
};