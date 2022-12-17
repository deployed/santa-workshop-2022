import { Box, TableCell, Typography } from "@mui/material";
import { PackageHeadersValues } from "./types";

const PackageTableHeaders = ({ headers }: PackageHeadersValues) => {
  return (
    <>
      {headers.map((element) => {
        return (
          <>
            <TableCell align="center">
              <Box borderRight={"1px solid gray"}>
                <Typography sx={{ fontWeight: "bold" }}>{element}</Typography>
              </Box>
            </TableCell>
          </>
        );
      })}
    </>
  );
};

export default PackageTableHeaders;
