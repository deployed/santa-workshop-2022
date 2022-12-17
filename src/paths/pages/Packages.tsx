import Box from "@mui/system/Box";
import Topbar from "../../components/Topbar";
import TablePackages from "../../components/TablePackages";

const Packages = () => {
  return (
    <>
      <Topbar>Packages topbar</Topbar>
      <Box
        component="main"
        sx={{
          padding: "10px",
          backgroundColor: "#E7DCD5",
          flexGrow: 1,
        }}
      >
        <TablePackages />
      </Box>
    </>
  );
};

export default Packages;
