import {PixiGame} from './game/pixi-game';
import {IGame} from './i-game';

import {store} from './store';
import * as actions from './actions';

store.dispatch(actions.resetX());

setInterval(function(){
    store.dispatch(actions.moveRight());
},1000);

const game=new IGame(store);
document.getElementById("app").appendChild(game.renderer.view);
game.run();