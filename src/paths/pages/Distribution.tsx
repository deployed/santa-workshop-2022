import Topbar from "../../components/Topbar";
import Box from "@mui/system/Box";
import DistributionPackagesList from "../../components/DistributionPackagesList";
import DistributionTimer from "../../components/DistributionTimer";

const Distribution = () => {
  return (
    <>
      <Topbar>Distribution Topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>
        Distribution
        <DistributionPackagesList/>
        <DistributionTimer/>
      </Box>
    </>
  )
}

export default Distribution