import Topbar from "../../components/Topbar";
import Box from "@mui/system/Box";
import PackagesList from "../../components/PackagesList";
import ProgressBar from "../../components/ProgressBar";
import Timer from "../../components/Timer";
import { Grid } from "@mui/material";

const Distribution = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#E7DCD5",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ margin: "16px", backgroundColor: "#E7DCD5" }}
      >
        <Grid item xs={6}>
          <ProgressBar />
        </Grid>
        <Grid item xs={6}>
          <Timer />
        </Grid>
        <Grid item xs={5}>
          <PackagesList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Distribution;
