import React, { useRef, useState, createRef, PureComponent, Component } from "react";
import parse from "html-react-parser";
import "./Problem.css";
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/dist/contrib/auto-render";

class Temp extends React.Component {
    
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    render() {
        return (
            <div className={"codeforces"}  ref = {this.ref} >
                {parse(this.props.mystate)}
            </div>
        )
    }

    componentDidUpdate() {
        renderMathInElement(this.ref.current, {
            delimiters: [
                { left: "$$$", right: "$$$", display: true },
                { left: "\\[", right: "\\]", display: true },
                { left: "%%", right: "%%", display: true },
                { left: "\\(", right: "\\)", display: false },
            ],
          });
    }
}
export default Temp;