const Ships = (shipType) => {
    let shipSize = 0
    const getType = () => shipType;
    const shipSizeGetter = () => {
        if(shipType === 'carrier'){
            shipSize = 5
        }else if(shipType === 'battleship'){
            shipSize = 4
        }else if(shipType === 'destroyer'){
            shipSize = 3
        }else if(shipType === 'submarine'){
            shipSize = 3
        }else if(shipType === 'patrol boat'){
            shipSize = 2
        }else{
            shipSize = null
        }
    }
    shipSizeGetter()
    let health = shipSize;
    const sunk = () => {
        if(health === 0){
            return true
        } else {
            return false
        }
    }

    const hit = () => {
        health -= 1
        if(health === 0){
            sunk()
        }
        return health
    }
    return {shipSize, getType, shipSizeGetter, health, sunk, hit}
}


// module.exports = Ships


export { Ships }
