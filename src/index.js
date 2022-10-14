import {Gameboard} from "./gameBoard.js"

import { Ships } from "./Ships.js"

import { Player } from "./Player.js"

// import "./Player.js"

const game = []


const player1obj = Player()
game.push(player1obj)
player1obj.createCarrier('horizontal', 'A1')
player1obj.createBattleship('vertical', 'F1')

const player2obj = Player();
game.push(player2obj)

player2obj.createCarrier('vertical', 'F4')
player2obj.createBattleship('horizontal', 'B1')

console.log(player1obj.createGameboard(player1obj))
console.log(player1obj.createGameboard(player1obj).receiveAttack('A1'))
console.log(player1obj.createGameboard(player1obj).receiveAttack('A2'))
console.log(player1obj.createGameboard(player1obj).receiveAttack('A3'))
console.log(player1obj.createGameboard(player1obj).receiveAttack('A4'))
console.log(player1obj.createGameboard(player1obj).receiveAttack('A5'))
// console.log(player1obj.shipList[1].shipCoordinates())
// console.log(player1obj.shipList[0].shipCoordinates())
// console.log(player2obj.createGameboard(player2obj))
// console.log(player1obj.createGameboard(player1obj).coordinates)


// console.log(game)
// game.forEach(player => {
//     console.log(player.shipList)
// })
// console.log(game[1].createGameboard().letsTry())
// console.log(game[0].createGameboard().coordinates())


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


export {player1obj,
        player2obj}

