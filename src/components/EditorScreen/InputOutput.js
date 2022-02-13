import React, { useState, useEffect } from 'react';
import "./InputOutput.css"
import Button from '@mui/material/Button';

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
    const handle = () =>{
      props.handleSubmit();
      setCount(showInput = false);
    }
    console.log('yha props',props);
    return (
        <div className = "input-output-container">
            <div className = 'buttons-container'> 
                <Stack direction="row" spacing={2} sx = {{bgcolor : ''}}>
                    
                    <Box sx={{ minWidth: 120 , height : 40  , bgcolor: '', color : 'white'}}>
                        <FormControl sx={{ minWidth: 120 , height : 40 , color : 'white'}}>
                            <InputLabel sx={{ minWidth: 120 , height : 40 , color : 'white'}} id="demo-simple-select-label">Lang</InputLabel>
                            <Select 
                            sx={{ minWidth: 120 , height : 40 , color : 'white'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Lang"
                            onChange={(e) => props.changeLang(e)}
                            >
                            <MenuItem selected value="cpp">C++</MenuItem>
                            <MenuItem value="java">JAVA</MenuItem>
                            <MenuItem value="py">Python</MenuItem>
                            <MenuItem value= "c">C</MenuItem>
                            <MenuItem value="cs">C#</MenuItem>
                            <MenuItem value="rb">Ruby</MenuItem>
                            <MenuItem value="kt">Kotlin</MenuItem>
                            <MenuItem value="swift">Swift</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 , height : 40  , bgcolor: '', color : 'white'}}>
                        <FormControl sx={{ minWidth: 120 , height : 40 , color : 'white'}}>
                            <InputLabel sx={{ minWidth: 120 , height : 40 , color : 'white'}} id="demo-simple-select-label">Theme</InputLabel>
                            <Select 
                            sx={{ minWidth: 120 , height : 40 , color : 'white'}}
                            labelId="demo-simple-select"
                            id="demo-simple"
                            // value={age}
                            label="Theme"
                            onChange={(e)=>props.changeTheme(e)}
                            >
                            <MenuItem selected value="monokai">monokai</MenuItem>
                            <MenuItem value="mono_industrial">mono_industrial</MenuItem>
                            <MenuItem value= "nord_dark">nord_dark</MenuItem>
                            <MenuItem value= "one_dark">one_dark</MenuItem>
                            <MenuItem value="pastel_on_dark">pastel_on_dark</MenuItem>
                            <MenuItem value= "solarized_light">solarized_light</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                   
                
                    <Button  variant="contained" onClick = {() =>setCount(showInput = true)}>Input</Button>
                    <Button  variant="contained" onClick = {() =>setCount(showInput = false)}>Output</Button>
                    <Button   color = "secondary" variant="contained" onClick = {() => handle()} endIcon={<SendIcon /> }>Run</Button>
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
