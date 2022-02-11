import React, { useState, useEffect } from 'react';
import "./InputOutput.css"
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Input from './Input';
import Output from './Output';

function InputOutput(props) {
    var [showInput , setCount] = useState(true);
    var c = {
        palette: {
          primary: {
            main: '#82b1ff',
          },
          secondary: {
            main: '#ff80ab',
          },
        },
      };
    useEffect(() => {
        
    });

    return (
        <div className = "input-output-container">
            <div className = 'buttons-container'> 
                <Stack direction="row" spacing={6} sx = {{bgcolor : ''}}>
                    
                    <Box sx={{ minWidth: 120 , height : 40  , bgcolor: '', color : 'white'}}>
                        <FormControl sx={{ minWidth: 120 , height : 40 , color : 'white'}}>
                            <InputLabel sx={{ minWidth: 120 , height : 40 , color : 'white'}} id="demo-simple-select-label">Lang</InputLabel>
                            <Select 
                            sx={{ minWidth: 120 , height : 40 , color : 'white'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                            >
                            <MenuItem value={1}>C++</MenuItem>
                            <MenuItem value={2}>JAVA</MenuItem>
                            <MenuItem value={3}>Python</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                   
                
                    <Button   variant="contained" onClick = {() =>setCount(showInput = true)}>Input</Button>
                    <Button sx = {{bgcolor : ''}}variant="contained" onClick = {() =>setCount(showInput = false)}>Output</Button>
                    <Button color = "secondary" variant="contained" onClick = {() => props.handleSubmit()} endIcon={<SendIcon /> }>Run</Button>
                </Stack>
            </div>

            <div className = "Input-Output-Area">
                
                    {showInput && <Input props = {props}/> }
                    {!showInput && <Output props = {props}/>}
                
            </div>    
        </div>           
    )

}

export default InputOutput
