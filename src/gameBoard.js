import { Ships } from "./Ships.js"
import { Player, coordinates } from "./Player.js"
import { player1obj } from "./index.js"
import { player2obj } from "./index.js"
import { game } from "./index.js"


const Gameboard = (player) => {


       const letsTry = () => {
        console.log(player.shipList)
       }

       const receiveAttack = (coordinate) => {
        for(const property in player.coordinates){
            if(property === coordinate){
                if(player.coordinates[property] === 0){
                    player.coordinates[property] = 'X'
                    console.log(player.coordinates) 
                    console.log(player.shipList)
                    return 'miss'
                }else if(typeof(player.coordinates[property]) === 'object'){
                    player.coordinates[property].hit()
                    console.log(`${player.coordinates[property]} has been hit!`)
                    if(player.coordinates[property].sunk() === true){
                        player.shipList.splice(player.shipList.indexOf(player.coordinates[property]), 1)
                        console.log(`${player.coordinates[property].getType()} has been sunk!`)
                        console.log(player.shipList)
                        if(player.shipList.length === 0){
                            console.log('you lose!')}}
                            player.coordinates[property] = 'HIT'
                    console.log(player.coordinates) 
                }else if(player.coordinates[property] === 'X' || player.coordinates[property] === "HIT"){
                        return "already tried here!"
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


    
    

    return {receiveAttack, letsTry, placeShips}

}




export { Gameboard }