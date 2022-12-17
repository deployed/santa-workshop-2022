import Box from "@mui/system/Box";
import Topbar from "../../components/Topbar";
import TablePackages from "../../components/TablePackages";

const Packages = () => {
  const datesFoo: string[] = ['10-12.20022', '12-12-2022', '11-12-2022', '1-12-2022'];
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
