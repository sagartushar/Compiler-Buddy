import React, { useEffect, useState , Component } from 'react';
import axios from 'axios';
import "./Text.css";
import Editor from './Editor.js';

export default class Text extends Component {
    constructor(){
        super();
        this.state={
            code:'sa',
            language:'cpp',
            input:'',
            output:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1=(data)=>{
        console.log("print ho rh",this.state);
        this.setState({
          code: data.value
        })
    }
    handleChange2=(e)=>{
      this.setState({
        language: e.target.value
      })

    //   console.log(this.state);
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
          console.log(JSON.stringify(response.data.output));
          val = JSON.stringify(response.data.output);
        })
        .catch(function (error) {
          console.log(error);
        });

        // console.log(val);
        this.setState({
          output : val
        })
    }
    
  render() {
    const {mystate} = this.state;
   
    return(
        
        <div className="editor-screen">
            <div className="editor"> 
{/*            
                <textarea type="text" 
                    placeholder="Code"  
                    value={this.state.code} onChange={this.handleChange1}
                /> */}

                <Editor mystate = {this.state} handleChange1 = {this.handleChange1}/>
            </div>
            <div className = "input-output">
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
            </div>
        </div>

        
    );
  }
}
