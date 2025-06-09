import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@shared/api/api';
import { Event } from '../Event';

export const fetchEvents = async (wellId: string) => 
  fetchData<Event[]>('DmEventT', { wellId }, ['wellId', 'eventId', 'eventCode']);

export const useFetchEvents = (wellId: string) => {
  return useQuery<Event[]>({
    queryKey: [`events/${wellId}`],
    queryFn: () => fetchEvents(wellId),
  });
}

