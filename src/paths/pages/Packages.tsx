import Box from "@mui/system/Box"
import ModalPackage from "../../components/ModalPackage"
import Topbar from "../../components/Topbar"

const Packages = () => {
  return (
    <>
      <Topbar>Packages topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}><ModalPackage/></Box>
    </>
  )
}

export default Packages