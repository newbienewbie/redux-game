import {Game} from './game';

export class MyGame extends Game {

    constructor(...args){
        super(...args);
        this.color="";
    }

    /**
     * update state
     */
    update(){
        const f=_=>{
            const r=Math.random();
            return parseInt(r*255);
        };
        this.color=`RGB(${f()},${f()},${f()})`;
        console.log(this.color);
    }


    /**
     * render 
     */
    draw(){
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}