import Box from "@mui/system/Box"
import Topbar from "../../components/Topbar"

const Packages = () => {
  return (
    <>
      <Topbar>Packages topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>Packages</Box>
    </>
  )
}

export default Packages