import React, { useEffect, useState , Component } from 'react';
import axios from 'axios';
import "./Text.css";
import Editor from './Editor.js';
import InputOutput from './InputOutput';
export default class Text extends Component {
    constructor(){
        super();
        this.state={
            code:'#include<iostream>',
            language:'cpp',
            input:'',
            output:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1=(data)=>{
        this.setState({
          code: data
        })
    }
    handleChange2=(e)=>{
      this.setState({
        language: e.target.value
      })

    }
    handleChange3=(e)=>{
  
      this.setState({
        input: e.target.value
      })
    }


    handleSubmit = async() => {
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
              <Editor mystate = {this.state} 
                handleChange1 = {this.handleChange1} />
            </div>
            <div className= 'input-output-scrren'>
              <InputOutput mystate = {this.state}
                 handleChange3 = {this.handleChange3} 
                 handleSubmit = {this.handleSubmit}/> 
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
