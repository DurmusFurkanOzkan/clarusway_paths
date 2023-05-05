import React from "react";
import { ReactDOM } from "react";
import Path from "./Path.jsx";
import contents from "./../contents.js";

function DisplayContents(cont){
    console.log(cont.key)
    return (<Path 
        ptitle={cont.title}
        psubtitle={cont.description}
        plink={cont.learn_button_link}
        pimage={cont.image}
        
    />
);
}



function App(){
    return <>
    <h1>Clarusway Paths</h1>
    {contents.map(DisplayContents)}
    </>;
}

export default App;