import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const data = {
    id: 245,
    age: 3,
    name: "Miłe dziecko",
    kindness: "Grzeczne",
    country: "Polska",
    city: "Kraków",
    post_code: "30-001",
    address: "Wrocławska 21/36",
    created_at: "2022-12-17T10:54:35.405Z",
    items: [
        {
            id: 0,
            name: "Sanki"
        },
        {
            id: 1,
            name: "Piłka"
        },
        {
            id: 2,
            name: "Lalka"
        },
    ],
    status: "NEW"
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
};

function ModalPackage() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <LeftSide data={data}/>
        <RightSide data={data}/>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPackage;