import {Gameboard} from "./gameBoard.js"

import { Ships } from "./Ships.js"

import { Player } from "./Player.js"

import {CPU} from "./computer.js"

import { DOM } from "./DOM.js"


DOM()

const game = []


const player1obj = Player()
// game.push(player1obj)
// player1obj.createCarrier('horizontal', 'A1')
// player1obj.createBattleship('vertical', 'F1')

const player2obj = Player();
// game.push(player2obj)

// player2obj.createCarrier('vertical', 'F4')
// player2obj.createBattleship('horizontal', 'B1')

// console.log(player1obj.createGameboard(player1obj).placeShips())
// console.log(player2obj.createGameboard(player2obj).placeShips())
// console.log(player2obj.createGameboard(player2obj).receiveAttack('A1'))
// console.log(CPU())
// console.log(player1obj.coordinates)




export {player1obj,
        player2obj}

