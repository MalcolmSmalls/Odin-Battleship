import {Gameboard} from "./gameBoard.js"

import { Ships } from "./Ships.js"

import { Player } from "./Player.js"

import {game} from "./gameBoard.js"
// import "./Player.js"

const player1obj = Player()
game.push(player1obj)
player1obj.createCarrier('horizontal', 'A1')
// player1obj.shipCoordinates()
// console.log(player1obj.shipList)
// player1obj.createGameboard()

// console.log(game[0].shipList[0].shipCoordinates())
console.log(game[0].createGameboard().coordinates)
// console.log(player1obj.createGameboard())
const player2obj = Player('player2');
game.push(player2obj)
player2obj.createGameboard()

console.log(game)

// console.log(player1obj.playerGameboard)
// player1.createGameboard()
// console.log(player1.playerGameboard)

// console.log(Gameboard().receiveAttack('B10'))
// console.log(Gameboard().receiveAttack('C10'))
// console.log(Gameboard().receiveAttack('D10'))
// console.log(Gameboard().receiveAttack('E10'))
// console.log(Gameboard().receiveAttack('A1'))
// console.log(Gameboard().receiveAttack('A2'))
// console.log(Gameboard().receiveAttack('A3'))
// console.log(Gameboard().receiveAttack('A4'))
// console.log(Gameboard().receiveAttack('F6'))
// console.log(Gameboard().receiveAttack('G1'))
// console.log(Gameboard().receiveAttack('G2'))
// console.log(Gameboard().receiveAttack('G6'))
// console.log(Gameboard().receiveAttack('H6'))
// console.log(Gameboard().receiveAttack('I6'))
// console.log(Gameboard().receiveAttack('J1'))
// console.log(Gameboard().receiveAttack('J2'))
// console.log(Gameboard().receiveAttack('J3'))
// console.log(Gameboard().receiveAttack('J6'))
// console.log(Gameboard().receiveAttack('J6'))
// console.log(Gameboard().coordinates)


export {player1obj}

