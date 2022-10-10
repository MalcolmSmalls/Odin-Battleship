import { gameBoard } from "./gameBoard.js"


test('Let\'s get thy coordinates!', () => {
    expect(gameBoard().coordinates.A1).toEqual(0)

})

