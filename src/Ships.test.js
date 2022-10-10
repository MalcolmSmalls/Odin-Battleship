// const Ships = require ('./Ships')
import { Ships } from "./Ships.js"

const carrier = Ships('carrier')

test('OY mate! Let\'s build some ships', () => {
    expect(carrier.sunk()).toEqual(false)
    expect(carrier.getType()).toEqual('carrier')
    expect(carrier.shipSize).toEqual(5)
    carrier.hit()
    carrier.hit()
    carrier.hit()
    carrier.hit()
    expect(carrier.hit()).toEqual(0)
    expect(carrier.sunk()).toEqual(true)
})