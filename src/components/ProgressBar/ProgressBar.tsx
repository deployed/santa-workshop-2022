import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BorderLinearProgress } from './styles';

const max = 12;

interface ProgressBarProps {
    deliveriesNumber: number;
}
export default function ProgressBar({deliveriesNumber}: ProgressBarProps) {
const repeat = Math.floor(deliveriesNumber/max);
const percentageDeliveriesNumber = Math.floor((deliveriesNumber*100)/max) - repeat*100;

  return (
    <Box sx={{ width: 210 }}>
        <Typography sx={{mb: 2}}>Obłożenie sań:</Typography>
        <Typography sx={{ml: 20}}>{percentageDeliveriesNumber} %</Typography>
        <BorderLinearProgress variant="determinate" value={percentageDeliveriesNumber} />
    </Box>
  );
}
