import Topbar from "../../components/Topbar"
import Box from "@mui/system/Box"

import VerifyLetterModal from '../../components/VerifyLetterModal';
import VerifyLetterModal from "../../components/VerifyLetterModal"
import LettersTable from "../../components/LettersTable"


const Letters = () => {
  return (
    <>
      <Topbar>Letters topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}>
       <VerifyLetterModal/>
       <VerifyLetterModal/>
       <LettersTable />
      </Box>
    </>
  )
}

export default Letters