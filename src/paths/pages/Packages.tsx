import Box from "@mui/system/Box";
import Topbar from "../../components/Topbar";
import PackagesTable from "../../components/PackagesTable";

const Packages = () => {
  return (
    <>
      <Topbar>Packages topbar</Topbar>
      <Box
        component="main"
        sx={{
          backgroundColor: "#E7DCD5",
          flexGrow: 1,
        }}
      >
        <PackagesTable />
      </Box>
    </>
  );
};

export default Packages;
