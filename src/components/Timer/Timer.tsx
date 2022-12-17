import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";

	
type seconds = {
    seconds : number;
}

const Timer = () =>{

    const fetchData = async () => {
        const data = await fetch(
            "https://santa.deployed.space/api/distribution/timer/");
            const response : seconds = await data.json();
            setTime(response.seconds);
    }

    const [time, setTime] = useState<number>();
    useEffect( () =>{
 

    fetchData();
        
        const intervalID = setInterval(() =>  {
            
            setTime((time) => {
                if(time === 0 ){
                    fetchData();
                }
                if(time === undefined){
                    return time;
                }
                
                return time-1;
            } );
        }, 1000);
    
        return () => clearInterval(intervalID);

    },[])


    if(time === undefined){
        return(
            <div>
                <CircularProgress />
            </div>
        )

    }
     
    

    return (
        <>
            <Typography fontFamily={"Roboto"} fontStyle= {"normal"} fontWeight = {"400"} fontSize = {"16px"} lineHeight ={"150%"}
            letterSpacing = {"0.15px"} color ={"#000000"}  width={"188px"} height={"24px"} left={"1px"}>
                Czas do odlotu:
            </Typography>
            <Typography fontFamily={"Roboto"} fontStyle= {"normal"} fontWeight = {"400"} fontSize = {"24px"} lineHeight ={"150%"}
            letterSpacing = {"0.15px"} textAlign={"center"}  width={"188px"} height={"24px"} top={"36px"} color ={"#294C89"}>
                { `${Math.floor(time/60)} min ${time%60} sek`}
            </Typography>
        </>
        
    )


}


export default Timer;