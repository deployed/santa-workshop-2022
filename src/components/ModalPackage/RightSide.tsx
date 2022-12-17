import Box from '@mui/material/Box';
import DataInterface from './DataInterface'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Wybierz formę</InputLabel>
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
            <Box>
                <Stack direction="row" spacing={2}>
                <Button type="submit" sx={ { background: "#5C76B7", borderRadius: 28 } } >Wyślij</Button>
                </Stack>
            </Box>
        </Box>
      </Box>
    )
  }
    export default RightSide;

