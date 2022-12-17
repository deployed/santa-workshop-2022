import React from "react";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";

type StatusProps = {
  status: string;
  onClick: () => void;
};

const PackButton = ({ status, onClick }: StatusProps) => {
  const isPacking = status === "new" ? true : false;

  const styles = {
    border: "1px solid",
    borderRadius: "30px",
    fontWeight: "bold",
    padding: "0.5rem",
    color: "#e7d8d8e5",
    background: "#133d91e3",
  };

  return isPacking ? (
    <Button style={styles} onClick={onClick}>
      Pakuj
    </Button>
  ) : (
    <Button style={{ ...styles, background: "#5078c78b" }} disabled>
      Pakuj
    </Button>
  );
};

export default PackButton;
