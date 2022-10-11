import { Ships } from "./Ships.js"

const carrier = Ships('carrier', 'horizontal', 'A2')

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

test('Does thou coordinates register?', () => {
    // expect(carrier.start.substring(1)).toEqual('1')
    carrier.shipCoordinates()
    expect(carrier.shipCoordinates()).toEqual('yes')
    expect(carrier.getAlignment()).toEqual('horizontal')
})