import React from "react";
import { Box, Button, Grid, Modal, Typography, CircularProgress } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';


export default function ({ ID }: { ID: number }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [letterData, setLetterData] = React.useState<{
        id: number,
        name: string,
        age: number,
        country: string,
        city: string,
        postCode: string,
        address: string,
        createdAt: string,
        items: string[]
    } | undefined>(undefined);

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

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://santa.deployed.space/api/wishlists/${ID}`, { method: "GET" });
            if (response.ok) {
                setLetterData(await response.json());
            }
        };
        fetchData();
    }, [])
    if (letterData === undefined) {
        return <Box><CircularProgress /></Box>
    }
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
                                {letterData?.name}<br />
                                <b>Wiek:</b><br />
                                {letterData?.age}<br />
                                <b>Grzeczność:</b><br />
                                x<br />
                                <b>Kraj:</b><br />
                                {letterData?.country}<br />
                                <b>Miasto:</b><br />
                                {letterData?.city}<br />
                                <b>Kod pocztowy:</b><br />
                                {letterData?.postCode}<br />
                                <b>Ulica i numer domu:</b><br />
                                {letterData?.address}<br />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ borderTopRightRadius: 12, padding: 3 }}>
                            <Box>
                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                        <Box sx={{ color: "#A9A9A9", width: "50%" }}>
                                            ID {letterData.id}<br />
                                        </Box>
                                        <Box>
                                            calendar  {new Date(letterData.createdAt).toLocaleString()}
                                        </Box>
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
                                    {letterData.items.map((item) => (
                                        <>
                                            <StarIcon sx={{ color: "gray", marginRight: 3, marginLeft: 3 }} />
                                            {item}
                                            < br />
                                        </>
                                    ))}
                                    Lista:<br />
                                    <Button variant="contained" onClick={() => { fetch(`https://santa.deployed.space/api/wishlists/${ID}/accept/`, { method: "POST", body: "" }) }} sx={{ margin: 3, marginLeft: 0, borderRadius: 50, width: 200 }}>AKCEPTUJ I WYŚLIJ</Button>
                                    <Button variant="outlined" onClick={() => { fetch(`https://santa.deployed.space/api/wishlists/${ID}/reject/`, { method: "POST", body: "" }) }} sx={{ margin: 3, marginLeft: 0, marginTop: 0, borderRadius: 50, width: 200 }}>ODRZUĆ I DAJ RÓZGĘ</Button>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>)
}