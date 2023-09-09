import React, { Component } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";

function Animation(){
    const[text] = useTypewriter({
        words:['Software Engineer','Full-stack Developer','Salesforce Application Architect'],
        loop:{},
      });
    return (
        <p class="animation">not your ordinary &lt;
            <span style={{color:'green'}}>
            {text}
        </span>&gt;
        <Cursor/>
        </p>
    );
}

export default Animation;