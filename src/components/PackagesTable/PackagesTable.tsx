import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { TableContainer } from "@mui/material";
import "./PackagesTable.css";

function createData(
  id: number,
  name: string,
  status: string,
  country: string,
  city: string,
  created_at: string
) {
  return { id, name, status, country, city, created_at };
}

const rows = [
  createData(0, "Marek", "new", "Polska", "Kraków", "10-12-2022"),
  createData(1, "Zosia", "new", "Polska", "Kraków", "10-12-2022"),
];

const packagesTable = () => {
  const titles = [
    "ID listu",
    "Imię i Nazwisko",
    "Status pakowania",
    "Kraj",
    "Miasto",
    "Data akceptacji",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="header">Pakowanie</h1>
      <TableContainer sx={{ justifyContent: "center", display: "flex" }}>
        <Table
          sx={{
            width: "90%",
            margin: "1rem",
            alignSelf: "center",
            background: "#ffff",
            boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.12)",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox disabled checked />
              </TableCell>
              {titles.map((title, i) => (
                <TableCell key={i} className="cell" align="center">
                  {title}
                </TableCell>
              ))}

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const values = [
                row.id,
                row.name,
                row.status,
                row.country,
                row.city,
                row.created_at,
              ];
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Checkbox />
                  </TableCell>
                  {values.map((value, i) => (
                    <TableCell key={i} align="center">
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default packagesTable;