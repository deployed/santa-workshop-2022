import { LinearProgress, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";

interface ProgressBarProps {
    children: React.ReactNode;
}

interface PackageDistribution {
  id: number
  name: string
  address: string
  postcode: string
  city: string
  country: string
  lat: string
  lng: string
}

const ProgressBar = ({children}: ProgressBarProps) => {
  
  const fetchData=async()=>{
    const data = await fetch('https://santa.deployed.space/api/distribution/');
    const distribution : PackageDistribution[]= await data.json();
    setVal(distribution.length);
  }
  const [val, setVal] = useState<number>(0);

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <><Box width={'210px'}>
      <Typography fontFamily={'roboto'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'}> Obłożenie sań: </Typography>
      <Typography align="right"> {Math.floor(val*100/15)}% </Typography>
      <Box><LinearProgress variant="buffer" value={Math.floor(val*100/15)}/></Box>
      </Box>
    </>
  )
}

export default ProgressBar;