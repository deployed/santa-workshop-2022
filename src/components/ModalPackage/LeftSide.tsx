import Box from '@mui/material/Box';
import DataInterface from './DataInterface'

const style = {
    wordWrap: "break-all",
  }

const styleimg = {
    width: "auto",
    height: "100px",
  }

  function LeftSide({ data }: DataInterface) 
  {
    return (
    <Box sx={style}>
       <Box>
        <Box>
            <img style={styleimg} src="https://imageio.forbes.com/specials-images/imageserve/619d6b517caa1a2492ae9a7a/Cheerful-little-girl-is-hugging-Christmas-gift-on-Christmas-tree/960x0.jpg"/>
        </Box>
        <Box>
        <p>Imię: {data.name}</p>
        <p>Wiek: {data.age}</p>
        <p>Grzeczność: {data.kindness}</p>
        </Box>
        <Box>
        <p>Kraj: {data.country}</p>
        <p>Miasto: {data.city}</p>
        <p>Kod-pocztowy: {data.post_code}</p>
        <p>Ulica i numer domu: {data.address}</p>
        </Box>
        </Box>
      </Box>
    )
  }
    export default LeftSide;