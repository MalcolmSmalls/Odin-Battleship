// const Ships = require ('./Ships')
import { Ships } from "./Ships.js"

const carrier = Ships('carrier')

test('OY mate! Let\'s build some ships', () => {
    expect(carrier.getType()).toEqual('carrier')
})