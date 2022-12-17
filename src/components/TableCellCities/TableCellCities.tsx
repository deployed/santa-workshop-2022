import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";

interface TableCellCitiesProps {
  children: Array<{ id: number; city: string }>;
}

const TableCellCities = ({ children }: TableCellCitiesProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Cities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {children.map(({id, city}) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {city}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// const Test = () => {
//   return (
//     <>
//       <TableCellCities>Krakow</TableCellCities>
//       <TableCellCities>Rzeszow</TableCellCities>
//       <TableCellCities>Warszawa</TableCellCities>
//     </>
//   );
// };
export default TableCellCities;
