import Topbar from "../../components/Topbar"
import Box from "@mui/system/Box"
import VerifyLetter from "../../components/VerifyLetterModal/VerifyLetter"
const Letters = () => {
  return (
    <>
      <VerifyLetter />
      <Topbar>Letters topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>Letters</Box>
    </>
  )
}

export default Letters