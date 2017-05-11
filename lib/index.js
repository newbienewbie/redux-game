
class Game {

    constructor(canvas,canvasContext,fps=1000/60){
        this.canvas=canvas;
        this.canvasContext=canvasContext;
        this.fps=fps;
    }

    update(){
    }

    draw(){
        this.canvasContext.fillStyle = "deepskyblue";
        this.canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }

    run(){
        this.update();
        this.draw();
        window.setTimeout(mainLoop, this.fps);
    };

}

const canvas = document.getElementById("game");
const canvasContext = canvas.getContext("2d");
const game=new Game(canvas,canvasContext);
game.run()
