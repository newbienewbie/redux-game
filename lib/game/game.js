
/**
 * Game 
 */
export class Game {

    constructor(){ }

    /**
     * update state
     */
    update(){ }


    /**
     * render 
     */
    render(){}

    
    /**
     * start the game
     */
    run(){ 
        const that=this;
        (function loop(){
            that.update();
            that.render();
            requestAnimationFrame(loop);
        })();
    };

}