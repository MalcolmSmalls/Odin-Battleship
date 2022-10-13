import {Gameboard} from './gameBoard.js'
import "./Player.js"


const Ships = (shipType, alignment, baseStart) => {
    let shipSize = 0
    const getType = () => shipType;
    const getAlignment = () => alignment
    const start = baseStart

    // if(player === 1){

    // }

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
        let coordinatesArr = []

        if(getAlignment() === "horizontal"){
            let startingNum = Number(start.substring(1));
            if(startingNum-1 + shipSize <= 10){
                for(let i=startingNum; i < startingNum + shipSize; i++ ){
                    coordinatesArr.push(`${start.substring(0,1)}${i}`)
    
                }
            }else{
                return
            }


 
        }else if(getAlignment() === "vertical"){
            let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
            let num = Number(start.substring(1));
            let abcStart = start.substring(0,1);
            let abcIndex = abc.indexOf(abcStart)
            if(abcIndex + shipSize <= 10){
                for(let i=abcIndex; i<abcIndex+shipSize;i++ ){
                    coordinatesArr.push(`${abc[i]}${num}`)
                }
            }else{
                return
            }
        }
         return coordinatesArr
    }

    return {shipSize, getType, shipSizeGetter, health, sunk, hit, shipCoordinates, getAlignment, start}
}


export { Ships }
