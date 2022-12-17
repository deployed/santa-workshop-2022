import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

interface TableHeaderElementProps {
    title: string
}

const TableHeaderElement = ({ title }:TableHeaderElementProps) => {
    return (
        <TableCell sx={{padding: "0"}}> 
            <div style={{minWidth: "100px", textAlign: "center", fontWeight: "bold", borderLeft: "1px solid #E0E0E0"}}>{title}</div>
        </TableCell>
    );
}

const titles = ["ID listu", "Imię i nazwisko", "Poziom grzeczności", "Status", "Kraj", "Miasto", "Data nadesłania", ""]

export default function LettersTable() {
  return (
    <>
        <h1 style={{padding: '20px'}}>Listy</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox></Checkbox>
                </TableCell>
                {
                    titles.map(title => {return <TableHeaderElement title={title}/>})
                }
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
    </>
  );
}