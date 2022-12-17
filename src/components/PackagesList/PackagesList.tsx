import Box from "@mui/system/Box"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {PackageDistribution} from './types';

interface PackagesListProps {
    children: React.ReactNode;
}
function formatAddress (row: PackageDistribution) 
{
    
    return  <>{row.address} {row.postcode} {row.city} {row.country} {row.lat} {row.lng}</>
}


const PackagesList = () => {

    const [packages, setPackages] = React.useState<PackageDistribution[]>([]);

    React.useEffect(
        () => {
            fetch("https://santa.deployed.space/api/distribution")
                .then((response) => response.json())
                .then((data) => { setPackages(data) });
        }, [])


    return (
        <>

            <TableContainer >
                <Table sx={{ minWidth: 80, backgroundColor: "#FFFFFF" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Paczki</TableCell>
                            <TableCell align="left">Imie i Nazwisko</TableCell>
                            <TableCell align="left">Adress</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            packages.map((row) => (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell >   {formatAddress(row)}</TableCell> 
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default PackagesList
