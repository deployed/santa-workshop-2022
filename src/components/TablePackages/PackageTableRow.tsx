import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { Packages } from "./types";
import CreationDate from "../CreationDate";

const PackageTableRow = ({ id, kindness,createdAt,  ...rest }: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>
      <CreationDate date={createdAt}/>
    </TableRow>
  );
};

export default PackageTableRow;
