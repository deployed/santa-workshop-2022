import TextComponent from "../TextComponent";
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
import PackageStatus from "../PackageStatus";
import FormatDate from "../FormatDate";
import { useEffect, useState } from "react";
import VerifyPackageModal from "../Modal";

type RowsDataType = {
  id: number;
  name: string;
  status: string;
  country: string;
  city: string;
  createdAt: string;
};

const PackagesTable = () => {

  const[isModalOpen, setIsModalOpen]=useState(false);

  const [rows, setRows] = useState<RowsDataType[]>([]);

  const fetchRowsData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("cannot fetch the data");
    }
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchRowsData("https://santa.deployed.space/api/packages/")
      .then((data) => setRows(() => data))
      .catch((err) => console.log(err.message));
  }, []);

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
      <VerifyPackageModal open={isModalOpen} setOpen={setIsModalOpen}/>
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
              {titles.map((title) => (
                <TableCell
                  key={title}
                  className="cell"
                  style={{ fontWeight: "bolder" }}
                  align="center"
                >
                  {title}
                </TableCell>
              ))}

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
                  <TableCell align="center">
                    <TextComponent>{row.id}</TextComponent>
                  </TableCell>
                  <TableCell align="center">
                    <TextComponent>{row.name}</TextComponent>
                  </TableCell>
                  <TableCell align="center">
                    <PackageStatus status={row.status} />
                  </TableCell>
                  <TableCell align="center">
                    <TextComponent>{row.country}</TextComponent>
                  </TableCell>
                  <TableCell align="center">
                    <TextComponent>{row.city}</TextComponent>
                  </TableCell>
                  <TableCell align="center">
                    <FormatDate strangeDate={row.createdAt} />
                  </TableCell>
                  <TableCell align="center">
                    <button onClick={()=>setIsModalOpen(true)}>Pakuj</button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PackagesTable;
