import React from 'react';
import {DataForChildrenType} from "./VerifyPackageModal";
import dataForChildren from "./DataForChildren";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';


function SizeOfPackage({dataForChildren}:{dataForChildren: DataForChildrenType}) {

    const[size, setSize]= React.useState(dataForChildren.size);

    const handleChange=(e : SelectChangeEvent)=>{
        setSize(e.target.value);
    }

    return (
        <div>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    onChange={handleChange}
                >
                    <MenuItem value="SMALL">Small</MenuItem>
                    <MenuItem value="MEDIUM">Medium</MenuItem>
                    <MenuItem value="LARGE">Large</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SizeOfPackage;