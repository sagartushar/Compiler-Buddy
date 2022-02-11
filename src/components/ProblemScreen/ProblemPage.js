import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";

import './ProblemPage.css';

import Problem from './Problem';



export default class Footer extends Component {
    constructor(){
        super();
        this.state={
            val : {
                error: true, htmlString: "<p>some</p>"
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        
    }
    handleSubmit = async()=>{
        const url = "https://cors-anywhere-jaagrav.herokuapp.com/https://codeforces.com/problemset/problem/1215/B";
       
        console.log("somne");   
        
        const response = await axios.get(url);
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
        
    }
    render( ) {
        console.log('render meri state' , this.state);
        return (
            <div className="problem-page">
                <div className = "problem-header">
                    <button 
                        id="button-addon2" onClick={this.handleSubmit.bind(this)}
                    >RUN</button> 
                </div>
                <div className = "problem-footer">
                    <Problem mystate = {String(this.state.val.htmlString)}/>
                </div>
                
            </div>
        )
    }
    
};


