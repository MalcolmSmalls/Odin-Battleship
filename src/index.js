import {gameBoard,
        coordinates} from "./gameBoard.js"

import { Ships } from "./Ships.js"



const carrier = Ships('carrier', 'vertical', 'F6')

console.log(carrier.shipCoordinates())

