import { Modal, Typography } from "@mui/material";
import { useState } from "react";
import PackButton from "./PackButton";

const PackModal = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <PackButton onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Typography>{id}</Typography>
      </Modal>
    </>
  );
};

export default PackModal;
