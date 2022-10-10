// const Ships = require ('./Ships.js')

import { gameBoard } from "./gameBoard.js"

import { Ships } from "./Ships.js"



// const carrier = Ships('carrier')
const carrier = Ships('carrier', 'horizontal', 'A2')
gameBoard().coordinates.A1 = "what"
console.log(gameBoard().coordinates.A1)
console.log(carrier.shipCoordinates())
console.log(carrier.getAlignment() === 'horizontal')

// console.log(carrier.hit())
// console.log(carrier.hit())
// console.log(carrier.hit())
// console.log(carrier.hit())
// console.log(carrier.hit())
// console.log(carrier.health)