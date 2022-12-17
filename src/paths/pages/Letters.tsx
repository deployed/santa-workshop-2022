import Topbar from "../../components/Topbar"
import Box from "@mui/system/Box"
import LettersTable from "../../components/LettersTable"

const Letters = () => {
  return (
    <>
      <Topbar>Letters topbar</Topbar>
      <Box component="main" sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1
      }}><LettersTable />
      </Box>
    </>
  )
}

export default Letters