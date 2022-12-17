import Topbar from "../../components/Topbar"
import Box from "@mui/system/Box"
import VerifyLetterModal from '../../components/VerifyLetterModal';

const Letters = () => {
  return (
    <>
      <Topbar>Letters topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>
        <VerifyLetterModal/>
      </Box>
    </>
  )
}

export default Letters