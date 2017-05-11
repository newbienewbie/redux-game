
import {Game} from './game';

const canvas = document.getElementById("game");
const canvasContext = canvas.getContext("2d");
const game=new Game(canvas,canvasContext);
game.run()
