import {Gameboard} from './gameBoard.js'
import { player1obj } from "./index.js"


const CPU = () => {
    let cleanArr = []
    for(const coordinate in player1obj.coordinates ){
        if(typeof(player1obj.coordinates[coordinate]) !== "string"){
            cleanArr.push(coordinate)
        }
    }
    console.log(cleanArr)
    // return cleanArr;
    let pick = cleanArr[Math.floor(Math.random() * cleanArr.length)]
    return player1obj.createGameboard(player1obj).receiveAttack(pick)

}


export { CPU }