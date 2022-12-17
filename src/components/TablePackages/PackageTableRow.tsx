import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { Packages } from "./types";
import DisplayPackageAcceptDates from "../DisplayPackageAcceptDates";

const PackageTableRow = ({ id, kindness,createdAt,  ...rest }: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>
      <DisplayPackageAcceptDates date={createdAt}/>
    </TableRow>
  );
};

export default PackageTableRow;
