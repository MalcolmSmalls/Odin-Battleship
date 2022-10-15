import { Ships } from "./Ships.js"
import { Player, coordinates } from "./Player.js"
import { player1obj } from "./index.js"
import { player2obj } from "./index.js"
import { game } from "./index.js"

// const coordinates = {A1: 0, A2: 0, A3: 0, A4: 0, A5: 0, A6: 0, A7: 0, A8: 0, A9: 0, A10: 0,
//     B1: 0, B2: 0, B3: 0, B4: 0, B5: 0, B6: 0, B7: 0, B8: 0, B9: 0, B10: 0,
//     C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0, C7: 0, C8: 0, C9: 0, C10: 0,                        
//     D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0, D7: 0, D8: 0, D9: 0, D10: 0,
//     E1: 0, E2: 0, E3: 0, E4: 0, E5: 0, E6: 0, E7: 0, E8: 0, E9: 0, E10: 0,
//     F1: 0, F2: 0, F3: 0, F4: 0, F5: 0, F6: 0, F7: 0, F8: 0, F9: 0, F10: 0,
//     G1: 0, G2: 0, G3: 0, G4: 0, G5: 0, G6: 0, G7: 0, G8: 0, G9: 0, G10: 0,
//     H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, H10: 0,
//     I1: 0, I2: 0, I3: 0, I4: 0, I5: 0, I6: 0, I7: 0, I8: 0, I9: 0, I10: 0,
//     J1: 0, J2: 0, J3: 0, J4: 0, J5: 0, J6: 0, J7: 0, J8: 0, J9: 0, J10: 0, 
//    }

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
                    // console.log(player.shipList[player.shipList.indexOf(coordinates[property])].shipCoordinates().splice(player.shipList[player.shipList.indexOf(coordinates[property])].shipCoordinates().indexOf(property), 1))
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
        //         console.log(coordinates)
    

        }


    
    
        // console.log(coordinates)

       
    //    carrier.shipCoordinates().forEach(item => {
    //     for(const property in coordinates){
    //         if(property === item){
    //             coordinates[property] = 'carrier'
    //         }
            // console.log(property.includes('A1'))
        
    //     }


    //    })

    //    console.log(game)


    return {receiveAttack, letsTry, placeShips}

}




export { Gameboard }