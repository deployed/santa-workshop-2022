import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import {DeliveryStatus} from './types';

const PackagingStatus = ({status}: {status:string}) => {  
  return (
    <Box> {status}
    </Box>
  )
}

export default PackagingStatus;