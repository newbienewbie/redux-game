import {Game} from './game';
import * as PIXI from 'pixi.js';

const _rendererOptions={
    weight:600,
    height:500,
    opts:{
        "antialias": true,
        "autoResize": true,
        "transparent": true,
        "resolution": 2,
    },
};

/**
 * Game using PIXI render engine
 */
export class PixiGame extends Game{

    constructor(store,rendererOptions=_rendererOptions,...args){
        super(...args);
        this.store=store;
        this.stage=new PIXI.Container();
        this.renderer=new PIXI.autoDetectRenderer(rendererOptions.weight,rendererOptions.height,rendererOptions.opts);
        this.loader=PIXI.loader;
        this.sprites=[];
    }



    /**
     * update stage with store
     */
    update(){
        
    }


    /**
     * render
     */
    render(){
        this.renderer.render(this.stage);
    }

}

PixiGame.PIXI=PIXI;
PixiGame.Sprite=PIXI.Sprite;
PixiGame.Application=PIXI.Application;