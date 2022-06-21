import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import SVGFullAnimation from "./svgFull";
import { red } from "@mui/material/colors";
// import SVGComputer from "./svgComputer";



function Test() {
    const boxTestArea = {
        marginTop: '100px',
        width: '100%',
        border: '1px solid red',
        margin: 'auto',
        padding: '0',
        minWidth: '400px'
    };
    
    // const character = {
    //     position: "absolute",
    //     width: '400px',
    //     right: '0'
    // };

    // store a reference to the box div
    const characterRef = useRef<HTMLDivElement>(null);
    // const computerRef = useRef<HTMLDivElement>(null);
  
    // wait until DOM has been rendered
    useEffect(() => {
      runAnimationTimeline();
    });

    const runAnimationTimeline = () => {
        const tl = gsap.timeline({});
        const hero = characterRef.current!.lastChild?.lastChild!;
        // tl.to(hero, {x: -1425, duration: 6});
        
    };

    
    
    // DOM to render
    return (
        <div style={boxTestArea}>
            <div 
                ref={characterRef}
                style={{
                    
                    
                }} 
            >
                <SVGFullAnimation/>
            </div>

            
        </div>
    );
  }



  export default Test;

  