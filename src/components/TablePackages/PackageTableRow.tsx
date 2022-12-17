import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import PackagingStatus from "../PackagingStatus";
import { Packages } from "./types";
import CreationDate from "../CreationDate";

const PackageTableRow = ({ id, kindness, createdAt, status, ...rest }: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>
      <CreationDate date={createdAt}/>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
      <PackagingStatus status={status}/>
      </TableCell>
    </TableRow>
  );
};

export default PackageTableRow;
