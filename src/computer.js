import {Gameboard} from './gameBoard.js'
import { player1obj } from "./index.js"


const CPU = () => {
    let cleanArr = []
    for(const coordinate in player1obj.coordinates ){
        if(player1obj.coordinates[coordinate] !== "X" || player1obj.coordinates[coordinate] !== "HIT"){
            cleanArr.push(coordinate)
        }
    }

    return cleanArr;


}


export { CPU }