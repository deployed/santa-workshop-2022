import React, { useEffect, useState } from 'react'
import Topbar from "../../components/Topbar"
import Name from "../../components/Name/Name"
import Box from "@mui/system/Box"
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import VerifyLetter from "../../components/VerifyLetterModal/VerifyLetter"

const Letters = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://santa.deployed.space/api/wishlists/')
      .then((response) => response.json())
      .then((data) => { setList(data) })
  }, [])

  return (
    <>
      <Topbar>Listy</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Checkbox defaultChecked /></TableCell>
                <TableCell>Id listu</TableCell>
                <TableCell>Imię i nazwisko</TableCell>
                <TableCell>Poziom Grzeczności</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Kraj</TableCell>
                <TableCell>Miasto</TableCell>
                <TableCell>Data nadesłania</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell>Przyklad</TableCell>
                  <TableCell><Name fullName={item.name} /></TableCell>
                  <TableCell><VerifyLetter ID={item.id} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Letters