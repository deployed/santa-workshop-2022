import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BorderLinearProgress } from './styles';


const mockedDeliveriesNumber = 14;
const max = 12;
const repeat = Math.floor(mockedDeliveriesNumber/max);
const percentageDeliveriesNumber = Math.floor((mockedDeliveriesNumber*100)/max) - repeat*100;


export default function ProgressBar() {
  return (
    <Box sx={{ width: 210 }}>
        <Typography sx={{mb: 2}}>Obłożenie sań:</Typography>
        <Typography sx={{ml: 20}}>{percentageDeliveriesNumber} %</Typography>
        <BorderLinearProgress variant="determinate" value={percentageDeliveriesNumber} />
    </Box>
  );
}
