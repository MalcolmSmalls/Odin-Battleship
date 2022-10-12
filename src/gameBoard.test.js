import { Gameboard } from "./gameBoard.js"


test('Will it get hit?', () => {
    expect(Gameboard().receiveAttack('G6')).toEqual('carrier')
})