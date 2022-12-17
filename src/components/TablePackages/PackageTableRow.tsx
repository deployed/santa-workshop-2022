import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { Packages } from "./types";

const PackageTableRow = ({ id, kindness, ...rest }: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>
      {Object.entries(rest).map(([key, element]) => {
        return <TableCell key={key}>{element}</TableCell>;
      })}
      <TableCell>Pakuj</TableCell>
    </TableRow>
  );
};

export default PackageTableRow;
