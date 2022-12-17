import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import PackagingStatus from "../PackagingStatus";
import { Packages } from "./types";
import CreationDate from "../CreationDate";
import Name from "../../components/Name/Name";
import Country from "../../components/Name/Country";
import { SendPresents } from "../SendPresents";

const PackageTableRow = ({
  id,
  kindness,
  createdAt,
  status,
  ...rest
}: Packages) => {
  return (
    <TableRow>
      <TableCell>
        <CheckBoxOutlineBlankOutlined />
      </TableCell>

      <TableCell>{id}</TableCell>
      <TableCell>
        <Name fullName={rest.name} />
      </TableCell>
      <TableCell>
        <PackagingStatus status={status} />
      </TableCell>
      <TableCell>
        <Country country={rest.country} />
      </TableCell>
      <TableCell>{rest.city}</TableCell>
      <CreationDate date={createdAt} />
      <TableCell>
        <SendPresents />
      </TableCell>
    </TableRow>
  );
};

export default PackageTableRow;
