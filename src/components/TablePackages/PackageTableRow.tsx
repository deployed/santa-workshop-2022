import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { Packages } from "./types";

const PackageTableRow = ({ id, kindness, ...rest }: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>
    </TableRow>
  );
};

export default PackageTableRow;
