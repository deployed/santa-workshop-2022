import { Button } from "@mui/material";
import { PackButtonProps } from "./types";

const PackButton = ({ onClick }: PackButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        "&:hover": {
          background: "white",
          color: "#294C89",
        },
        background: "#294C89",
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
        borderRadius: "16px",
        color: "white",
      }}
    >
      PAKUJ
    </Button>
  );
};

export default PackButton;
