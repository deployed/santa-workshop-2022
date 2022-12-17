import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import { DeliveryStatus } from "./types";

const PackagingStatus = ({ status }: { status: string }) => {
  return (
    <Box
      border={1}
      marginX={"auto"}
      width={40}
      alignContent={"center"}
      borderRadius={"50px"}
      textAlign="center"
      justifyItems={"center"}
      justifyContent={"center"}
    >
      {status}
    </Box>
  );
};

export default PackagingStatus;
