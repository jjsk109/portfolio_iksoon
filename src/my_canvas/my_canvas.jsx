import React, { useState } from 'react';
import styles from './my_canvas.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';



const Mycanvas = (props) => {
    
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState([]);
    const [canvasTag, setCanvasTag] = useState([]);

    const color = useRef('white');
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log( canvas);
        const context = canvas.getContext("2d");
        // context.strokeStyle = "white";
        
        setCtx(context);
    }, []);

    const drawStart = () => {
        console.log("drawStart");
        setDraw(true);
    }
    const drawEnd = () => {
        console.log("drawEnd");
        setDraw(false);
    }
    const finishDrawing = () => {
        console.log("drawEnd");
        setDraw(false);
    }
    const drawHandel = event => {
        if(draw){
            console.log("drawHandel");
            ctx.beginPath();
            ctx.arc(event.clientX ,event.clientY,2.5,Math.PI * 2, false);
            ctx.arc(900 ,500,0,Math.PI * 2, true);
            ctx.fillStyle='red';
            ctx.fill();
            console.log(event.clientX ,event.clientY );
           
        }
    }

    return(
            <div>
                <canvas className={styles.can} ref={canvasRef} 
                    onMouseDown={drawStart}
                    onMouseUp={drawEnd}
                    onMouseMove={drawHandel}
                    onMouseLeave={finishDrawing}
                ></canvas>
                <div className={styles.button_box}>
                    <button className={ styles.red}></button>
                    <button className={ styles.blue}></button>
                    <button className={ styles.yello}></button>
                    <button className={ styles.white}></button>
                    <button className={ styles.brown}></button>
                    <button className={ styles.green}></button>
                    <button className={ styles.pink}></button>
                </div>
            </div>
    )
};

export default Mycanvas;