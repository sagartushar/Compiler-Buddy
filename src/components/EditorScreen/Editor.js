import React, { useEffect, useState } from 'react';
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-java";
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';

import "ace-builds/src-noconflict/theme-monokai";
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/mode-snippets';
import "ace-builds/src-noconflict/ext-language_tools"

const Editor = ( props) => {
    
    return(
        <AceEditor
            mode="c_cpp"
            theme="monokai"
            width="100%"
            height='100%'
            onChange = {(e)=>{props.handleChange1(e)}}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            placeholder ="Write Here"
            value={props.mystate.code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4 ,
        }}/>
    )

}

export default Editor;
