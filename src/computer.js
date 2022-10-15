import {Gameboard} from './gameBoard.js'
import { player1obj } from "./index.js"


const CPU = () => {
    for(const coordinate in player1obj.coordinates ){
        if(coordinate !== "Xs"){
            player1obj.createGameboard(player1obj).receiveAttack(coordinate)
        }



    }


}


export { CPU }