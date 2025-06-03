import axios from 'axios';
import { apiUrl } from '@app/variables';
import { useQuery } from '@tanstack/react-query';

import { Site } from "../Site"


export const fetchSites = async (projectId: string) => {
  try {
    const response = await axios.get<Site[]>(`${apiUrl}/CdSiteSource/projectId/${projectId}/?fields=projectId,siteId,siteName`);
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка: ', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Ошибка загрузки кустов');
    }
    throw new Error('Возникла неизвестная ошибка!');

  }
}

export const useFetchSites = (projectId: string) => {
  return useQuery<Site[]>({
    queryKey: ['sites'],
    queryFn: () => fetchSites(projectId),
  });
}

