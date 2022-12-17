import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


const mockedDeliveriesNumber = 14;
const max = 12;
const repeat = Math.floor(mockedDeliveriesNumber/max);
const percentageDeliveriesNumber = Math.floor((mockedDeliveriesNumber*100)/max) - repeat*100;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));



export default function ProgressBar() {
  return (
    <Box sx={{ width: 210 }}>
        <Typography sx={{mb: 2}}>Obłożenie sań:</Typography>
        <Typography sx={{ml: 20}}>{percentageDeliveriesNumber} %</Typography>
        <BorderLinearProgress variant="determinate" value={percentageDeliveriesNumber} />
    </Box>
  );
}
