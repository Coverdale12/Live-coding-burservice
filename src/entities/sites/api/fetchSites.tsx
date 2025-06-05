import { fetchData } from '@shared/api/api';
import { useQuery } from '@tanstack/react-query';

import { Site } from "../Site"


export const fetchSites = async (projectId: string) => 
  fetchData<Site[]>('CdSiteSource', { projectId }, ['projectId', 'siteId', 'siteName']);

export const useFetchSites = (projectId: string) => {
  return useQuery<Site[]>({
    queryKey: ['sites'],
    queryFn: () => fetchSites(projectId),
  });
}

