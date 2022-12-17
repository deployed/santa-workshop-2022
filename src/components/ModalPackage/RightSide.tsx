import Box from '@mui/material/Box';
import DataInterface from './DataInterface'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from 'react';

const style = {
  };

  function RightSide({ data }: DataInterface) {
        const [age, setAge] = useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value);
        };

    return (
    <Box sx={style}>
       <Box>
            <Box>
                <p>ID 12344</p>
                <p>10.12.2022</p>
                <p>Pakowanie</p>
            </Box>
            <Box>
                <p>Lista:</p>
                {data.items.map(({name})=>(
                    <FormControlLabel control={<Checkbox defaultChecked />} label={name} />
                ))}
            </Box>
            <Box>
                
                <p>Rozmiar paczki</p>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Rozmiar paczki</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value={10}>Mała</MenuItem>
                    <MenuItem value={20}>Średnia</MenuItem>
                    <MenuItem value={30}>Duża</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
      </Box>
    )
  }
    export default RightSide;

