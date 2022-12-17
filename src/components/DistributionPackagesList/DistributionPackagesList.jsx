import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';

const DistributionPackagesList = () => {
    const [packagesList, setPackagesList] = useState([])
    const fetchTable = async () => {
        const result = await fetch("https://santa.deployed.space/api/distribution/");
        const data = await result.json();
        setPackagesList(data);
    };
    useEffect(() => { fetchTable() }, []);
    return (
        <TableContainer sx={{ width: 500 }}>
            <Table component={Paper} sx={{ backgroundColor: "#FCFBFA" }}>
                <TableHead>
                    <TableCell>ID Paczki</TableCell>
                    <TableCell>Imię i Nazwisko</TableCell>
                    <TableCell>Adres</TableCell>
                </TableHead>
                <TableBody>
                    {packagesList.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.country}{", "}{row.city}{", "}{row.address}{", "}{row.postcode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

};


export default DistributionPackagesList
