import React, {useState} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import {style} from "@mui/system";
import dziecko from "./dziecko.png"
import DataForChildren from "./DataForChildren";
import internal from "stream";
import termin from "./termin.png"
import closeImg from "./close.png"
import ListOfWishes from "./ListOfWishes";
import SizeOfPackage from "./SizeOfPackage";


export interface DataForChildrenType{
    wishListId: number;
    name: string;
    age: number;
    kindness: number;
    country: string;
    city: string;
    postalCode: string;
    address: string;
    id: number;
    items: {
        id: number;
        name: string;
    }[];
    createdAt: string;
    status: string;
    size: string;
}

interface VerifyPackageModalProps {
    open: boolean;
    setOpen:(open: boolean)=>void;
}


function VerifyPackageModal({open, setOpen}:VerifyPackageModalProps) {




    const [dataForChildren, setDataForChildren]=useState<DataForChildrenType>(
        {
            wishListId: 1,
            name: "Joe Kernel",
            age: 10,
            kindness: 2,
            country: "Polska",
            city: "Kraków",
            postalCode: "30-133",
            address: "Lea, 114",
            id: 1,
            items: [
                {
                    id: 1,
                    name: "Lego blocks"
                },
                {
                    id: 2,
                    name: "Sister"
                }
            ],
            createdAt: "2022-12-15T10:08:52.796000+01:00",
            status: "sent",
            size: "LARGE"
        }
    )

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Modal sx={{...style, display: "flex",
                alignItems:"center",
                justifyContent:"center"}}
                open={open}
                onClose={setOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={{
                    backgroundColor: "white",
                    width: "650px",
                    height: "606px",
                    borderRadius:"25px",
                    display: 'flex',
                }}>
                    <Box
                        sx={{...style,
                        width:"30%",
                        height:"100%",
                        overflow: 'hidden', backgroundColor:"rgba(15, 88, 141, 0.05)", borderBottomLeftRadius:"25px"

                    }}>
                        <img style={{borderTopLeftRadius:"25px", boxSizing:"border-box"}} src={dziecko}/>
                        {/*Data of children*/}
                        <Box sx={{...style,height:"100%" ,display:"flex",flexDirection:"row"}}>
                            <Box sx={{width:"100%", height:"100%", padding:"10% 10%"}}>
                                <DataForChildren dataForChildren={dataForChildren}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{width:"70%", padding:"5% 5%"}}>
                        <Box sx={{height:"10%", backgroundColor:"", display:"flex"}}>
                            <Box sx={{width:"30%",display:"flex", flexDirection:"column"}}>
                                <div style={{color:"#757575", width:"100%"}}>ID: {dataForChildren.wishListId}</div>
                                <div style={{color:"#757575"}}><img src={termin}/> </div>
                            </Box>
                            <Box sx={{width:"70%", display:"flex", justifyContent:"space-between"}}>
                                <div style={{border:"solid 2px #757575", color:"#757575",height:"50%", borderRadius:"7px"}}>Pakowanie</div>
                                <img onClick={handleClose} style={{height:"30%", color:"#757575",}} src={closeImg}/>
                            </Box>
                        </Box>
                        {/*List to wisches*/}
                        <Box>
                            <h2>Lista:</h2>
                        </Box>
                        <Box sx={{display:"flex",height:"50%"}}>
                            <ListOfWishes dataForChildren={dataForChildren}/>
                        </Box>
                        <Box sx={{height:"30%"}}>
                            <span style={{fontSize:"13px"}}>Rozmiar paczki:</span>
                            <SizeOfPackage dataForChildren={dataForChildren}/>
                        </Box>
                        <Box>
                            <button style={{borderRadius:"20px",color:"white",width:"40%", backgroundColor:"#294C89"}}>Wyślij</button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default VerifyPackageModal;