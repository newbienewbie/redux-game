import {PixiGame} from './game/pixi-game';



export class IGame extends PixiGame{

    constructor(store,opts,...args){
        super(store,opts,...args);
        
        this.loader 
            .add("img/player-idle.png")
            .load(()=>{
                const resources=this.loader.resources;
                this.sprites.push(new PIXI.Sprite(resources["img/player-idle.png"].texture));
                this.sprites.forEach(s=>{
                    this.stage.addChild(s);
                });
            });
    }


    update(){
        // sync stage with store
        const store=this.store;
        this.sprites.forEach(s=>{
            s.x=store.getState().x;
            s.y=store.getState().y;
        });
    }

}