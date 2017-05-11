import {PixiGame} from './game/pixi-game';



export class IGame extends PixiGame{

    constructor(store,opts,...args){
        super(store,opts,...args);
        
        const sprite=new PixiGame.Sprite.fromImage("img/player-idle.png");
        this.sprites.push(sprite);
        this.sprites.forEach(s=>{
            this.stage.addChild(s);
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