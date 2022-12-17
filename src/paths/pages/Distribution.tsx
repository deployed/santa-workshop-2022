import Topbar from "../../components/Topbar";
import Box from "@mui/system/Box";
import DistributionPackagesList from "../../components/DistributionPackagesList";
import DistributionTimer from "../../components/DistributionTimer";
import ProgressBar from "../../components/ProgressBar";
import DistributionMap from "../../components/DistributionMap";


const Distribution = () => {
  return (
    <>
      <Topbar>Distribution Topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1,
      }}>
        <ProgressBar deliveriesNumber={14}/>
        <DistributionPackagesList/>
        <DistributionTimer/>
        Distribution
        <DistributionMap/>
      </Box>
    </>
  )
}

export default Distribution