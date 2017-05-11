
import {MyGame} from './my-game';

const canvas = document.getElementById("game");
const canvasContext = canvas.getContext("2d");
const game=new MyGame(canvas,canvasContext);
game.run()
