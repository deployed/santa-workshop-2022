import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { Packages } from "./types";
import PackageTableRow from "./PackageTableRow";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useState } from "react";
import PackageTableHeaders from "./TablePackageHeaders";

const headers = [
  "ID listu",
  "Imię i nazwisko",
  "Status pakowania",
  "Kraj",
  "Miasto",
  "Data Akceptacji",
  "",
];

const mockTableElements: Packages[] = [
  {
    id: 1,
    wishListId: 1,
    name: "Joe Kernel",
    kindness: 5,
    status: "sent",
    country: "Polska",
    city: "Kraków",
    createdAt: "2022-12-15T10:08:52.796000+01:00",
  },
  {
    id: 2,
    wishListId: 1,
    name: "YES",
    kindness: 5,
    status: "sent",
    country: "Polska",
    city: "Kraków",
    createdAt: "2022-12-15T10:08:52.796000+01:00",
  },
];

const TablePackages = () => {
  const [tableElements, setTableElements] =
    useState<Packages[]>(mockTableElements);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <CheckBoxOutlineBlankOutlined />
              </TableCell>
              <PackageTableHeaders headers={headers} />
            </TableRow>
          </TableHead>
          {tableElements.map((element) => {
            return <PackageTableRow {...element} />;
          })}
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePackages;
