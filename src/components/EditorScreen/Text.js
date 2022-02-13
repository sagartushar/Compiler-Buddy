import React, { useEffect, useState , Component } from 'react';
import axios from 'axios';
import "./Text.css";
import Editor from './Editor.js';
import InputOutput from './InputOutput';
import DownloadIcon from '@mui/icons-material/Download';

export default class Text extends Component {
    constructor(){
        super();
        this.state={
            code: '#include<iostream>\nusing namespace std;\nint main()\n{\n    //Write Code Here..\n    return 0;\n}',
            language:'cpp',
            input:'',
            output:'',
            mode: 'c_cpp',
            theme: 'monokai'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }
    downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([this.state.code], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "Code.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
    handleChange1=(data)=>{
        this.setState({
          code: data
        })
    }
    changeLang=(e)=>{
      this.setState({
        language: e.target.value
      })
      var lang = e.target.value;
    
      if(lang === "java"){
        this.setState({
          mode : 'java'
        })
      }else if(lang === "py"){
        this.setState({
          mode: 'python'
        })
      }else {
        this.setState({
          mode : 'c_cpp'
        })
      }
      
    }
    handleChange3=(e)=>{
  
      this.setState({
        input: e.target.value
      })
    }
    changeTheme = (e) => {
      this.setState({
        theme : e.target.value
      })
    }

    handleSubmit = async() => {
      console.log("yeri " , this.state);
        var val  = "";

        var config = {
              method: 'post',
              url: 'https://cors-anywhere-jaagrav.herokuapp.com/https://codexweb.netlify.app/.netlify/functions/enforceCode',
              headers: { 
                'Content-Type': 'application/json',
              },
              data : this.state
          };
        await axios(config)
        .then(function (response) {
          val = JSON.stringify(response.data.output);
        })
        .catch(function (error) {
          console.log(error);
        });

        this.setState({
          output : val
        })
    }
    
  
  render() {
    const {mystate} = this.state;
   
    return(
        
        <div className="editor-screen">
          
          <div className="editor"> 
              <button onClick={this.downloadTxtFile}><DownloadIcon /></button>
              <Editor mystate = {this.state} id="myInput"
                handleChange1 = {this.handleChange1} />
            </div>
            <div className= 'input-output-scrren'>
              <InputOutput mystate = {this.state}
                 handleChange3 = {this.handleChange3} 
                 handleSubmit = {this.handleSubmit}
                 changeLang = {this.changeLang}
                 changeTheme = {this.changeTheme}
                 /> 
                 
            </div>
            
            {/* <div className = "input-output">
                <div className="input">
                    <textarea type="text" 
                        placeholder="input" 
                        value={this.state.input} onChange={this.handleChange3}
                    />
                </div>

                <div className="output">
                    <textarea type="text" 
                        placeholder="output"
                        value={this.state.output}
                    />
                </div>
                

                <div className="lang-run">
                    <label for="Lang">Lang:</label>
                    <select type = "text" name="lang" onChange={this.handleChange2}>
                        <option value="cpp">Cpp</option>
                        <option value="c">C</option>
                        <option value="java">Java</option>
                        <option value="cs">C#</option>
                        <option value="py">Python</option>
                        <option value="rb">Ruby</option>
                        <option value="kt">Kotlin</option>
                        <option value="swift">Swift</option>
                    </select>

                    <button className="btn btn-success"  
                        id="button-addon2" onClick={this.handleSubmit.bind(this)}
                    >RUN</button>

                </div>
            </div> */}
        </div>

        
    );
  }
}
