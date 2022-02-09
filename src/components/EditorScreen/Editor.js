import React, { useEffect, useState } from 'react';

const Editor = ( props) => {
    console.log("meri state" ,props.mystate);
    const spaces = 4;
    const [text, setText] = useState({value: props.mystate.code, caret: -1, target: null});

    useEffect(() => {

        if(text.caret >= 0){

            text.target.setSelectionRange(text.caret + spaces, text.caret + spaces);

        }

    }, [text]);

    const handleTab = (e) => {

        let content = e.target.value;
        let caret   = e.target.selectionStart;

        if(e.key === 'Tab'){

            e.preventDefault();

            let newText = content.substring(0, caret) + ' '.repeat(spaces) + content.substring(caret);

            setText({value: newText, caret: caret, target: e.target});

        }

    }

    const handleText = (e) => {
        setText({value: e.target.value, caret: -1, target: e.target});
        props.handleChange1(text);
    }

    return(
        <textarea
            onChange  = {handleText}
            onKeyDown = {handleTab}
            value     = {text.value}
        />
    )

}

export default Editor;
