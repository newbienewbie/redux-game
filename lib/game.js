
/**
 * Game 
 */
export class Game {

    constructor(canvas,canvasContext,fps=1000/60){
        this.canvas=canvas;
        this.canvasContext=canvasContext;
        this.fps=fps;
    }

    /**
     * update state
     */
    update(){ }


    /**
     * render 
     */
    render(){ }

    run(){
        setInterval(
            _=>{ this.update(); this.render(); }, 
            this.fps
        );
    };

}