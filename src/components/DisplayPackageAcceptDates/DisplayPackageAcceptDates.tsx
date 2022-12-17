import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { stringify } from 'querystring';

function createData(
    date: string,

  ) {
    return {date};
  }

const DisplayPackageAcceptDates: React.FC<{date: string} > = ({date}) => {
    const properDate = formatDate(date);
    
    return(

        <TableCell component="th" scope="row">
            {properDate}
        </TableCell>
    

    );
}


function formatDate(baseDate: string): string{

    const newDate = new Date(baseDate);

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDay();


    return (day<10 ? "0" + day : day) + "-" +  month + "-" + year;
    
}

export default DisplayPackageAcceptDates;


