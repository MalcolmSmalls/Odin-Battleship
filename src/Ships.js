import {gameBoard} from './gameBoard.js'

const Ships = (shipType, alignment, baseStart) => {
    let shipSize = 0
    const getType = () => shipType;
    const getAlignment = () => alignment
    const start = baseStart

    const shipSizeGetter = () => {
        if(shipType === 'carrier'){
            shipSize = 5
        }else if(shipType === 'battleship'){
            shipSize = 4
        }else if(shipType === 'destroyer'){
            shipSize = 3
        }else if(shipType === 'submarine'){
            shipSize = 3
        }else if(shipType === 'patrol boat'){
            shipSize = 2
        }else{
            shipSize = null
        }
    }
    shipSizeGetter()
    let health = shipSize;
    const sunk = () => {
        if(health === 0){
            return true
        } else {
            return false
        }
    }

    const hit = () => {
        health -= 1
        if(health === 0){
            sunk()
        }
        return health
    }
    const shipCoordinates = () => {
        if(getAlignment() === "horizontal"){
            // let startingNum = Number(start.substring(1));
            // for(let i=startingNum; i<=shipSize;i++ ){
                gameBoard().coordinates.A2 = 2
                console.log(gameBoard().coordinates.A2)

            // }
        }else if(getAlignment() === "vertical"){

        }
        // return gameBoard().coordinates.A2
    }
    shipCoordinates()
    return {shipSize, getType, shipSizeGetter, health, sunk, hit, shipCoordinates, getAlignment, start}
}


// module.exports = Ships


export { Ships }
