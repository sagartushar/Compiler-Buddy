import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";

import './ProblemPage.css';

import Problem from './Problem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default class Footer extends Component {
    constructor(){
        super();
        this.state={
            val : {
                error: false, htmlString: ""
            },
            url :  "https://codeforces.com/problemset/problem/1217/B",
            preurl : "https://cors-anywhere-jaagrav.herokuapp.com/"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange = (e) => {
        this.setState({
            url : e.target.value
          })
    }
    
    handleSubmit = async()=>{
        
        var link = this.state.preurl + this.state.url;
        
        const response = await axios.get(link);
        console.log(response);

        const $ = cheerio.load(response.data);
        const questionData = $(".problemindexholder").html();
        
        if(questionData){
            this.setState({
                val : {
                    error: false, htmlString: questionData
                }
            })
        }else{
            this.setState({
                val : {
                    error: true, htmlString: "" 
                }
            })
        }
        console.log('this->state' , this.state.val.htmlString);
    }
    componentDidMount(){
        this.handleSubmit();
    }
    render( ) {
        
        console.log('render meri state' , this.state);
        return (
            <div className="problem-page">
                <div className = "problem-header ">
                    <div className="handle-search">
                        <div className = "inside-handle-search">
                           Enter or paste Codeforces Problem Link
                        </div>

                            <div className="search">
                                
                                <input type="text" class="searchTerm"  name="firstname" value = {this.state.url} onChange={this.handleChange}></input>
                            <Button  className = "searchButton" variant="contained"
                            onClick={this.handleSubmit.bind(this)} endIcon={<SendIcon /> }></Button> </div>
                      
                        
                    
                    </div>
                </div>
                <div className = "problem-footer">
                    <Problem mystate = {String(this.state.val.htmlString)}/>
                </div>
                
            </div>
        )
    }
    
};


