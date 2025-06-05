import { fetchData } from '@shared/api/api';
import { useQuery } from '@tanstack/react-query';
import { Report } from '../Report';



export const fetchReports = async (wellId: string) =>
  fetchData<Report[]>('DmReportJournal', { wellId },
    [
      'eventCode',
      'reportJournalId',
      'wellId', 'wellboreId',
      'dateReport', 'eventId',
      'reportAlias', 'description',
      'entityType', 'reportNo'
    ]);

export const useFetchReports = (wellId: string) => {
  return useQuery<Report[]>({
    queryKey: ['sites'],
    queryFn: () => fetchReports(wellId),
  });
}

