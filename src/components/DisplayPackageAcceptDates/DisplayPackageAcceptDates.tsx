import React from 'react'
import TableCell from '@mui/material/TableCell';
import {formatDate} from './utils'

const DisplayPackageAcceptDates: React.FC<{date: string} > = ({date}) => {
    const properDate = formatDate(date);
    
    return(
        <TableCell component="th" scope="row">
            {properDate}
        </TableCell>
    );
}



export default DisplayPackageAcceptDates;


