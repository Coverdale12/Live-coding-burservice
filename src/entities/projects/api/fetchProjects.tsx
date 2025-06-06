import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@shared/api/api';

export interface Project {
  projectId: string,
  projectName: string
}

export const fetchProjects = async () =>
  fetchData<Project[]>('CdProjectSource', {}, ['projectId', 'projectName']);

export const useFetchProjects = () => {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}

