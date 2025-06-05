import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@shared/api/api';

export interface Events {
  wellId: string,
  eventId: string,
  eventCode: string,
}



export const fetchEvents = async (wellId: string) => 
  fetchData<Events[]>('DmEventT', { wellId }, ['wellId', 'eventId', 'eventCode']);

export const useFetchEvents = (wellId: string) => {
  return useQuery<Events[]>({
    queryKey: [`events/${wellId}`],
    queryFn: () => fetchEvents(wellId),
  });
}

