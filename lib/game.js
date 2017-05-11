export class Game {

    constructor(canvas,canvasContext,fps=1000/60){
        this.canvas=canvas;
        this.canvasContext=canvasContext;
        this.fps=fps;
    }

    update(){
    }

    draw(){
        this.canvasContext.fillStyle = "deepskyblue";
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    run(){
        this.update();
        this.draw();
        window.setTimeout(mainLoop, this.fps);
    };

}