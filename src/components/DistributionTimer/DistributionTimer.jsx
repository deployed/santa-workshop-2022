import Box from "@mui/system/Box";
import { useState, useEffect } from "react";

const DistributionTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const fetchTimer = async() => {
    const result = await fetch("https://santa.deployed.space/api/distribution/timer/");
    const { seconds } = await result.json();
    setSeconds(seconds);
  };
  useEffect(() => {fetchTimer()}, []);
  setTimeout(() => {
    if (seconds > 0)
      setSeconds(seconds - 1);
  }, 1000);
  const minutes = seconds / 60 - seconds / 60 % 1;
  const secondsToDisplay = seconds - (minutes * 60);
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
