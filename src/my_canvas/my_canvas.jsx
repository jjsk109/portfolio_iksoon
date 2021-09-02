import React, { useState } from 'react';
import styles from './my_canvas.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';



const Mycanvas = (props) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState([]);
    const [drawColor,setColor] = useState('white');
    const [drawColorClass,setColorClass] = useState(styles.white);
    const [draw, setDraw] = useState(false);
    const [size, setSize] = useState(20);
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvaHeight, setCanvasHeight] = useState(0);
    const [commends,setComends] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d"); 
        setCtx(context);
        setCanvasWidth( canvas.width);
        setCanvasHeight(canvas.height);
    }, []);

    const drawStart = event => {
        setDraw(true);
        ctx.beginPath();
        ctx.arc(event.clientX ,event.clientY,size,Math.PI * 2, false);
        ctx.fillStyle=`${drawColor}`;
        ctx.fill();
        const setCon = {x:event.clientX ,y:event.clientY,size:size,color:drawColor};
        const newcon = [setCon,...commends];
        setComends(newcon);
        console.log(commends);
    }
    const drawEnd = () => {
        setDraw(false);
    }
    const finishDrawing = () => {
        setDraw(false);
    }
    const drawHandel = event => {
        if(draw){
            ctx.beginPath();
            ctx.arc(event.clientX ,event.clientY,size,Math.PI * 2, false);
            ctx.fillStyle=`${drawColor}`;
            ctx.fill();
            const setCon = {x:event.clientX ,y:event.clientY,size:size,color:drawColor};
            const newcon = [setCon,...commends];
            setComends(newcon);
        }
    }
    const changeColor = selectColor =>{
        const color = selectColor.target.value;
        setColor(color);
        setColorClass(selectColor.target.className)
    }
    const changeSize = event => {
        const size = event.target.value > 100 ? 100 : event.target.value;
        const resize =   size < 0 ? 1 :  size;
        setSize(resize);
    }
    const resetHandel = () => {
        ctx.beginPath();
        ctx.clearRect(0, 0, canvasWidth, canvaHeight);
    }
   
    const saveHandel = () => {
        console.log("save");
    }
    const handleKeys = event => {
        if(event.ctrlKey && event.key ==='z'){
            const con = commends.shift();
            console.log(commends);
           // console.log(con);
        }
    }
    window.addEventListener('keydown', handleKeys);

    return(
            <div>
                <canvas className={styles.can} ref={canvasRef} 
                    onMouseDown={drawStart}
                    onMouseUp={drawEnd}
                    onMouseMove={drawHandel}
                    onMouseLeave={finishDrawing}
                    
                   
                ></canvas>
                <button className={styles.reset} onClick={resetHandel}>reset</button>
                <button className={styles.reset} onClick={saveHandel}>save</button>
                <div className={styles.button_box}> 
                    <button className={styles.white} onClick={changeColor} value="white"></button>
                    <button className={styles.black} onClick={changeColor} value="black"></button>
                    <button className={styles.red} onClick={changeColor} value="red" ></button>
                    <button className={styles.blue} onClick={changeColor} value="blue"></button>
                    <button className={styles.yellow} onClick={changeColor} value="yellow"></button>
                    <button className={styles.brown} onClick={changeColor} value="brown"></button>
                    <button className={styles.green} onClick={changeColor} value="green"></button>
                    <button className={styles.pink} onClick={changeColor} value="pink"></button>
                    <input type="range" id="vol" name="vol"  value={size} onChange={changeSize} min="0" max="100"></input>
                    <input type="number" min="0" max="100" onChange={changeSize} value={size}/>
                    <div className={drawColorClass}></div>
                </div>
            </div>
    )
};

export default Mycanvas;