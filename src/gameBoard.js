import { Ships } from "./Ships.js"
import { Player, coordinates } from "./Player.js"
import { player1obj } from "./index.js"
import { player2obj } from "./index.js"
import { game } from "./index.js"
import { DOM } from "./DOM.js"


const Gameboard = (player) => {


       const receiveAttack = (coordinate) => {
        for(const property in player.coordinates){
            if(property === coordinate){
                if(player.coordinates[property] === 0){
                    player.coordinates[property] = 'X'
                    console.log(player.coordinates) 
                    console.log(player.shipList)
                    return false
                }else if(typeof(player.coordinates[property]) === 'object'){
                    player.coordinates[property].hit()
                    if(player.coordinates[property].sunk() === true){
                        player.shipList.splice(player.shipList.indexOf(player.coordinates[property]), 1)
                        console.log(`${player.coordinates[property].getType()} has been sunk!`)
                        console.log(player.shipList)
                        if(player.shipList.length === 0){
                            console.log('you lose!')}}
                        player.coordinates[property] = 'HIT'
                        return true
                }else if(player.coordinates[property] === 'X' || player.coordinates[property] === "HIT"){
                        return 
                }
                }
            }
        }



        const placeShips = () => {
            player.shipList.forEach(ship => {
                ship.shipCoordinates().forEach(item => {
                    for(const property in player.coordinates){
                        if(property === item){
                            player.coordinates[property] = ship
                        }
    
                    }
            
            
                   })         
                })


        }


    
    

    return {receiveAttack, placeShips}

}




export { Gameboard }