import Box from "@mui/system/Box"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface PackagesListProps {
    children: React.ReactNode;
}

interface PackageDistribution {
    id: number;
    name: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    lat: string;
    lng: string;
}

const fetchData = () => {
    const resp = fetch("https://santa.deployed.space/api/distribution");
    return resp;
}



const PackagesList = ({ children }: PackagesListProps) => {
    const pack = [
        {
            id: 2, name: " name", address: "miasto", postcode: "10-123",
            city: "kraków", country: "Poland", lat: "471.66899", lan: "029"
        },
        {
            id: 5, name: " Ka", address: "miasto", postcode: "10-123",
            city: "kraków", country: "Poland", lat: "471.66899", lan: "029"
        }
    ]
    const [packages , setPackages] = React.useState<PackageDistribution[]>([]);
    React.useEffect(
        ()=> {
            fetch("https://santa.deployed.space/api/distribution")
            .then((response)=> response.json())
            .then((data)=>{setPackages(data)});
        }, [])
        

    return (
        <>
            <Box sx={{
                width: 420,
                flexGrow: 1
            }}>
                <TableContainer >
                    <Table sx={{ minWidth: 80 , backgroundColor: "#FFFFFF" }} aria-label="simple table">
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
                                    < TableRow >
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>
                                            {row.address} {row.postcode} {row.city} {row.country} {row.lat} {row.lng}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default PackagesList
