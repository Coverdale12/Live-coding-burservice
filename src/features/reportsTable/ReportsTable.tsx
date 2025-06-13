import { MaterialReactTable } from 'material-react-table';
import { Report } from '@entities/reports/Report';
import columns from "./ReportsColumns"

const ReportTable = ({ data }: { data: Report[] }) => {

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={true}
      enableSorting={true}
      enableBottomToolbar={true}
      enableTopToolbar={true}
      muiTableBodyRowProps={{ hover: false }}
    />
  );
};

export default ReportTable;