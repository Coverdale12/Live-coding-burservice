import { MRT_ColumnDef } from "material-react-table"
import formatDateToDMY from "@shared/lib/formatDate/formatDate";
import { Report } from "@entities/reports/Report";

const columns: MRT_ColumnDef<Report>[] = [
  {
    accessorKey: 'entityType',
    header: 'Тип',
  },
  {
    accessorKey: 'dateReport',
    header: 'Дата',
    accessorFn: (row) => formatDateToDMY(row.dateReport),
  },
  {
    accessorKey: 'reportNo',
    header: '№ п/п',
  },
  {
    accessorKey: 'eventCode',
    header: 'Мероприятие',
  },
  {
    accessorKey: 'description',
    header: 'Описание',
  },
  {
    header: 'Действия',
  },
];

export default columns