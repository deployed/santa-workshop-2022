import React from "react";
import { Box, Button, Card, CardContent, Grid, makeStyles, Modal, Paper, styled, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import ListModal from "../ListModal";


const SendPresents = () =>{

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        borderRadius: '12px',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        padding: '0',
        flexDirection: 'column',
    };


    return (<>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="verify-letter-modal"
            aria-describedby="verify-letter-modal"
        >
            <Box sx={style}>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Box sx={{ bgcolor: "#F3F7F9", borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
                            <img style={{ borderTopLeftRadius: 12 }} src="https://s3-alpha-sig.figma.com/img/66c9/766b/c207d69c2b105689d11455c446de3096?Expires=1672012800&Signature=G-bz4llIrnYsmX7~YJnA3JZA8k8Q7iLhFUYmZbQwzpQfof4hejgLIAabKy1d4ranhvKZbrTKCbacGmz179yYdJ2Yp6y25tjYLSyyaiDCfGXDkS8cGjQCgzKDJJy78nHQjBTwfEtXKi7~MX1GY2mH09fltna7UIMFQsMWym7RyG5SUTnOHkfiSCRVMo1qvs0BgXWiBcj7TRu0CQ7xgjdYTI-hcMUSfuqWu7HbmtwPh0hGmtME23Io1ehvQTp99J9GfrJPPB9xsjPNerJKApJG68LmHQEae3iXBXvmfnwgKA8GbMkQy8o0vNcRQ5Q~4Ctd5RhyVwGCUSDIUy1u9O0L3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" width="100%" />
                            <Typography sx={{ padding: 3 }}>
                                <b>Imię:</b><br />
                                x<br />
                                <b>Nazwisko:</b><br />
                                xxx xxxxxxxx<br />
                                <b>Wiek:</b><br />
                                x lat<br />
                                <b>Grzeczność:</b><br />
                                x<br />
                                <b>Kraj:</b><br />
                                x<br />
                                <b>Miasto:</b><br />
                                x<br />
                                <b>Ulica:</b><br />
                                x<br />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ borderTopRightRadius: 12, padding: 3 }}>
                            <Box>
                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "#A9A9A9", width: "50%" }}>
                                            ID x<br />
                                            calendar  xx.xx.xxxx<br />
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={5}>
                                        <Typography sx={{ borderRadius: 12, border: "solid", width: 100, textAlign: "center" }}>
                                            category
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={1}>
                                        <Button variant="text" sx={{ color: "black" }} onClick={handleClose}>
                                            <CloseIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ margin: 3 }}>
                                <Typography sx={{ fontSize: 25 }}>
                                    <ListModal></ListModal>
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>)
}

export default SendPresents