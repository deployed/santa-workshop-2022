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
              <TableCell className="cell" align="center">
                ID listu
              </TableCell>
              <TableCell className="cell" align="center">
                Imię i Nazwisko
              </TableCell>
              <TableCell className="cell" align="center">
                Status pakowania
              </TableCell>
              <TableCell className="cell" align="center">
                Kraj
              </TableCell>
              <TableCell className="cell" align="center">
                Miasto
              </TableCell>
              <TableCell className="cell" align="center">
                Data akceptacji
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Checkbox />
                  </TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.country}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.created_at}</TableCell>
                  <TableCell align="center">pakuj</TableCell>
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
