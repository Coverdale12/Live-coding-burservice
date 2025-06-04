import axios from 'axios';
import { apiUrl } from '@app/variables';
import { useQuery } from '@tanstack/react-query';

export interface Events {
  wellId: string,
  eventId: string,
  eventCode: string,
}

export const fetchEvents = async (wellId: string) => {
  try {
    const response = await axios.get<Events[]>(apiUrl + `/DmEventT/wellId/${wellId}/?fields=wellId,eventId,eventCode`);
    return response.data
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      console.error('Ошибка: ', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Ошибка загрузки месторождений');
    }
    throw new Error('Возникла неизвестная ошибка!');

  }
}

export const useFetchEvents = (wellId: string) => {
  return useQuery<Events[]>({
    queryKey: [`events/${wellId}`],
    queryFn: () => fetchEvents(wellId),
  });
}

