import {types} from '../actions';


export function reducer(state,action){
    switch(action.type){
        case types.resetX:
            return Object.assign({},state,{x:0,y:400});
        case types.moveLeft:
            return Object.assign({},state,{x:state.x-10});
        case types.moveRight:
            return Object.assign({},state,{x:state.x+10});
        default:
            return state;
    }
}