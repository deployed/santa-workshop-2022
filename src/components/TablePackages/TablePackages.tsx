import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

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

interface HeadersValues {
  headers: string[];
}

interface Packages {
  id: number;
  wishListId: number;
  name: string;
  kindness: number;
  status: string;
  country: string;
  city: string;
  createdAt: string;
}

const Headers = ({ headers }: HeadersValues) => {
  return (
    <>
      {headers.map((element) => {
        return (
          <>
            <TableCell align="center">
              <Box borderRight={"1px solid gray"}>
                <Typography sx={{ fontWeight: "bold" }}>{element}</Typography>
              </Box>
            </TableCell>
          </>
        );
      })}
    </>
  );
};

const Row = ({ id, kindness, ...rest }: Packages) => {
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

const TablePackages = () => {
  const [tableElements, setTableElements] =
    useState<Packages[]>(mockTableElements);

  return (
    <>
      <TableContainer component={Paper} sx={{ margin: "10px 5px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <CheckBoxOutlineBlankOutlined />
              </TableCell>
              <Headers headers={headers} />
            </TableRow>
          </TableHead>
          {tableElements.map((element) => {
            return <Row {...element} />;
          })}
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePackages;
