import React, {useEffect, useRef, useState} from 'react'
import video from "./video.mp4";

const RefExamples = () => {
    const[play , setPlay] = useState(true);
    const ele = useRef();
    const video1 = useRef();
    useEffect(()=>{
        ele.current.style.color="red";
        ele.current.innerText="React ref";
    });


    let playORpause=()=>{
        if(play == true){
            video1.current.play();
            console.log(play);
            setPlay(false);
        }else{
            video1.current.pause();
            console.log(play);
            setPlay(true);
            
        }
    }
  return (
    <div>
        <h1 ref={ele}>Hello</h1>
        <video ref={video1} src={video} width="1000" height="500" onClick={playORpause}></video>
    </div>
  )
}

export default RefExamples