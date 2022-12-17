import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import StatusInLetterTable from '../StatusInLetterTable';
import { useEffect, useState } from 'react';
import { TableBody } from '@mui/material';
import TextInLetterTable from '../TextInLetterTable';
import KindnessInLetterTable from '../KindnessInLetterTable';
import FormatDate from '../FormatDate';

interface TableHeaderElementProps {
    title: string
}

type LetterTableRow = {
    "id": number,
    "name": string,
    "kindness": number,
    "country": string,
    "city": string,
    "createdAt": string
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
    const [data, setData] = useState<LetterTableRow[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const data = await fetch('https://santa.deployed.space/api/wishlists/');
            const result = await data.json();
            setData(result);
        }
        fetchData()
    }, [])
  return (
    <>
        <h1 style={{padding: '20px'}}>Listy</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Lista listów">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox/>
                        </TableCell>
                        {titles.map(title => {return <TableHeaderElement key={title} title={title}/>})}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow>
                            <TableCell sx={{alignItems: 'center'}}>
                                <Checkbox />
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <TextInLetterTable>{row.id}</TextInLetterTable>
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <TextInLetterTable>{row.name}</TextInLetterTable>
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <KindnessInLetterTable value={row.kindness} />
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <StatusInLetterTable />
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <TextInLetterTable>{row.country}</TextInLetterTable>
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <TextInLetterTable>{row.city}</TextInLetterTable>
                            </TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: '20px'}}>
                                <FormatDate strangeDate={row.createdAt} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  );
}