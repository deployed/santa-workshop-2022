import Box from "@mui/system/Box";
import { useState } from "react";

const DistributionTimer = () => {
  const [seconds, setSeconds] = useState(500);
  setTimeout(() => {
    if (seconds > 0)
      setSeconds(seconds - 1);
  }, 1000);
  let minutes: number = seconds / 60 - seconds / 60 % 1;
  let secondsToDisplay: number = seconds - (minutes * 60);
  return (
    <Box>
      <span style={{ fontSize: 18 }}>Czas odlotu:</span>
      <br />
      <div style={{ color: "#002984", fontSize: 25, padding: 20 }}>
        {minutes}{" "}
        minut{" "}
        {secondsToDisplay}{" "}
        sekund
      </div>
    </Box>
  )
}

export default DistributionTimer
