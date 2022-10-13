import { Ships } from "./Ships.js"


const Player = () => {
    let shipList = []
    const createCarrier = (alignment, location) => {
        const carrier = Ships('carrier', alignment, location)
        shipList.push(carrier)
        console.log(shipList)
    }

    return {shipList, createCarrier}
}


// const carrier = Ships('carrier', 'vertical', 'F6')
// const battleShip = Ships('battleship', 'horizontal', 'A1')
// const destroyer = Ships('destroyer', 'horizontal', 'J1')
// const submarine = Ships('submarine', "vertical", 'B10')
// const patrolBoat = Ships('patrol boat', 'horizontal', 'G1')

// const player1 = [carrier, battleShip, destroyer, submarine, patrolBoat ]

export { Player }