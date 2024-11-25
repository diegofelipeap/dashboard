import PropTypes from 'prop-types';
import { Table, TableHeader, TableRow, TableData } from './styles';

const DataTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Status</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableData>{item.name}</TableData>
            <TableData>{item.email}</TableData>
            <TableData>{item.status}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

// Validação de props com prop-types
DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
