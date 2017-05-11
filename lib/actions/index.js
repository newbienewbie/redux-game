
export const types={
    resetX:"RESET_X",
    moveLeft:"MOVE_LEFT",
    moveRight:"MOVE_RIGHT",
};


export function resetX(){
    return {
        type:types.resetX,
    };
}


export function moveLeft(){
    return {
        type:types.moveLeft,
    };
}


export function moveRight(){
    return {
        type:types.moveRight,
    };
}