import { Ships } from "./Ships.js"
import {Gameboard} from "./gameBoard.js"



const Player = (player) => {
    let shipList = []
    let playerGameboard
    const createCarrier = (alignment, location) => {
        const carrier = Ships('carrier', alignment, location)
        shipList.push(carrier)
    }
    const createBattleship = (alignment, location) => {
        const battleship = Ships('battleship', alignment, location)
        shipList.push(battleship)
    }
    const createDestroyer = (alignment, location) => {
        const destroyer = Ships('destroyer', alignment, location)
        shipList.push(destroyer)
    }
    const createSubmarine = (alignment, location) => {
        const submarine = Ships('submarine', alignment, location)
        shipList.push(submarine)
    }
    const createPatrolBoat = (alignment, location) => {
        const patrolBoat = Ships('patrol boat', alignment, location)
        shipList.push(patrolBoat)
    }


    const createGameboard = () => {
        // playerGameboard = Gameboard(player)
        // Gameboard(player)
        // console.log(player)
    }
    // Gameboard(player)


    return {shipList, createCarrier, createBattleship, createDestroyer, createSubmarine, createPatrolBoat, createGameboard, playerGameboard, player}
}




;
// player1obj.createCarrier('vertical', 'F6')

// player1.createCarrier('horizontal', 'A1')


// const carrier = Ships('carrier', 'vertical', 'F6')
// const battleShip = Ships('battleship', 'horizontal', 'A1')
// const destroyer = Ships('destroyer', 'horizontal', 'J1')
// const submarine = Ships('submarine', "vertical", 'B10')
// const patrolBoat = Ships('patrol boat', 'horizontal', 'G1')

// const player1 = [carrier, battleShip, destroyer, submarine, patrolBoat ]

export { Player }