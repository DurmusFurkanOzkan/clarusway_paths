import React  from "react";
import { ReactDOM } from "react";

function Path(props){

    return <>
     <article className="path">
        <section className="left-section">
            <figcaption>
                <figure>
                    <img src={props.pimage} alt="" />
                </figure>
            </figcaption>
        </section>
        <section className="right-section">
            
                <h3>{props.ptitle}</h3>
                <p>{props.psubtitle}</p>
               
                <a href={props.plink}>
                    <button >Learn More</button>
                </a>
        </section>
        
                
    </article>
    </>
}

export default Path;