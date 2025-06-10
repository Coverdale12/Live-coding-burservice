import { fetchData } from '@shared/api/api';
import { useQuery } from '@tanstack/react-query';
import { Wells } from "../Wells"


// export const fetchWells = async (siteId: string | string[]) => {
//   try {
//     const ids = Array.isArray(siteId) ? siteId.join(',') : siteId;
    
//     const response = await axios.get<Wells[]>(`${apiUrl}/CdWellSource/siteId/${ids}/?fields=siteId,wellCommonName,wellId,spudDate,reason`);
//     return response.data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Ошибка: ', error.response?.data || error.message);
//       throw new Error(error.response?.data?.message || 'Ошибка загрузки скважин!');
//     }
//     throw new Error('Возникла неизвестная ошибка!');

//   }
// }
export const fetchWells = async (siteId: string | string[]) => {
  const siteIds = Array.isArray(siteId) ? siteId.join(',') : siteId
  return fetchData<Wells[]>('CdWellSource', {siteId: siteIds }, ['siteId', 'wellCommonName', 'wellId', 'spudDate', 'reason']);
}
export const useFetchWells = (siteId: string | string[], options = {}) => {
  return useQuery<Wells[]>({
    queryKey: ['wells', siteId],
    queryFn: () => fetchWells(siteId),
    ...options,
    enabled: Boolean(siteId),
  });
}

