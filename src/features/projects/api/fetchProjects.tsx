import axios from 'axios';
import { apiUrl } from '@app/variables';
import { useQuery } from '@tanstack/react-query';

interface Project {
  projectId: string,
  projectName: string
}

export const fetchProjects = async () => {
  try {
    const response = await axios.get<Project[]>(apiUrl + "/CdProjectSource?fields=projectName,projectId");
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

export const useFetchProjects = () => {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}

