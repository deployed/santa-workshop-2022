import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'row',
  padding: '0',
};

function VerifyLetterModal() {
  const [open, setOpen] = useState(false);
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
            <LeftSide/>
            <RightSide/>
        </Box>
      </Modal>
    </div>
  );
}

export default VerifyLetterModal;
