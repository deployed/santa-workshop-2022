import Topbar from "../../components/Topbar";
import Box from "@mui/system/Box";
import DistributionTimer from "../../components/DistributionTimer";
import ProgressBar from "../../components/ProgressBar";

const Distribution = () => {
  return (
    <>
      <Topbar>Distribution Topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1,
      }}>
        Distribution
        <ProgressBar/>
        <DistributionTimer/>
      </Box>
    </>
  )
}

export default Distribution