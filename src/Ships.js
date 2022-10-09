const Ships = (shipName, shipSize) => {
    let health = shipSize;
    const getName = () => shipName;
    const getSize = () => shipSize;
    const sunk = () => {

    }

    const hit = x => {
        health -= 1
        if(health === 0){
            sunk()
        }
    }
}