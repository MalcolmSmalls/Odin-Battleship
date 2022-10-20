import { Player } from "./Player.js"
import { player1obj } from "./index.js"
import { player2obj } from "./index.js"

const DOM = () => {
    const content = document.querySelector("#content")
    let shipAlignment = "horizontal"
    content.innerHTML = ""
    const grid = document.createElement('div')
    const h1 = document.createElement('h1')
    const verticalButton = document.createElement('button')
    const horizontalButton = document.createElement('button')
    const undoButton = document.createElement('button')
    const divButton = document.createElement('div')
    const startGameBtn = document.createElement('button')
    const divSection = document.createElement('div')
    divSection.className = "startGame"
    const titleDiv = document.createElement('div')
    titleDiv.className = "title"
    const gameDiv = document.createElement('div')
    gameDiv.className = "game"
    content.appendChild(gameDiv)

    startGameBtn.textContent = "Start Game"
    startGameBtn.className = "start_btn"
    divButton.className = "div_btn"
    verticalButton.textContent = "Vertical"
    horizontalButton.textContent = "Horizontal"
    undoButton.textContent = "Undo"
    content.appendChild(titleDiv)
    titleDiv.appendChild(h1)
    // const gameSection = document.querySelector('.game')
    h1.textContent = `Place Your Carrier`
    content.appendChild(divButton)
    divButton.appendChild(verticalButton)
    divButton.appendChild(horizontalButton)
    divButton.appendChild(undoButton)
    content.appendChild(grid)
    grid.className = "grid"
    grid.innerHTML = `<div class='gridCoordinate' value='A1'></div>
                      <div class='gridCoordinate' value='A2'></div>
                      <div class='gridCoordinate' value='A3'></div>    
                      <div class='gridCoordinate' value='A4'></div> 
                      <div class='gridCoordinate' value='A5'></div>    
                      <div class='gridCoordinate' value='A6'></div>    
                      <div class='gridCoordinate' value='A7'></div>    
                      <div class='gridCoordinate' value='A8'></div>    
                      <div class='gridCoordinate' value='A9'></div>    
                      <div class='gridCoordinate' value='A10'></div>    

                      <div class='gridCoordinate' value='B1'></div>
                      <div class='gridCoordinate' value='B2'></div>
                      <div class='gridCoordinate' value='B3'></div>    
                      <div class='gridCoordinate' value='B4'></div>    
                      <div class='gridCoordinate' value='B5'></div> 
                      <div class='gridCoordinate' value='B6'></div>    
                      <div class='gridCoordinate' value='B7'></div>    
                      <div class='gridCoordinate' value='B8'></div>    
                      <div class='gridCoordinate' value='B9'></div>    
                      <div class='gridCoordinate' value='B10'></div>    

                      
                      <div class='gridCoordinate' value='C1'></div>
                      <div class='gridCoordinate' value='C2'></div>
                      <div class='gridCoordinate' value='C3'></div>    
                      <div class='gridCoordinate' value='C4'></div> 
                      <div class='gridCoordinate' value='C5'></div>   
                      <div class='gridCoordinate' value='C6'></div>    
                      <div class='gridCoordinate' value='C7'></div>    
                      <div class='gridCoordinate' value='C8'></div>    
                      <div class='gridCoordinate' value='C9'></div>    
                      <div class='gridCoordinate' value='C10'></div>   

                      
                      <div class='gridCoordinate' value='D1'></div>
                      <div class='gridCoordinate' value='D2'></div>
                      <div class='gridCoordinate' value='D3'></div>    
                      <div class='gridCoordinate' value='D4'></div>    
                      <div class='gridCoordinate' value='D5'></div> 
                      <div class='gridCoordinate' value='D6'></div>    
                      <div class='gridCoordinate' value='D7'></div>    
                      <div class='gridCoordinate' value='D8'></div>    
                      <div class='gridCoordinate' value='D9'></div>    
                      <div class='gridCoordinate' value='D10'></div>   

                      
                      <div class='gridCoordinate' value='E1'></div>
                      <div class='gridCoordinate' value='E2'></div>
                      <div class='gridCoordinate' value='E3'></div>    
                      <div class='gridCoordinate' value='E4'></div>  
                      <div class='gridCoordinate' value='E5'></div>  
                      <div class='gridCoordinate' value='E6'></div>    
                      <div class='gridCoordinate' value='E7'></div>    
                      <div class='gridCoordinate' value='E8'></div>    
                      <div class='gridCoordinate' value='E9'></div>    
                      <div class='gridCoordinate' value='E10'></div>   

                      
                      <div class='gridCoordinate' value='F1'></div>
                      <div class='gridCoordinate' value='F2'></div>
                      <div class='gridCoordinate' value='F3'></div>    
                      <div class='gridCoordinate' value='F4'></div>   
                      <div class='gridCoordinate' value='F5'></div>  
                      <div class='gridCoordinate' value='F6'></div>    
                      <div class='gridCoordinate' value='F7'></div>    
                      <div class='gridCoordinate' value='F8'></div>    
                      <div class='gridCoordinate' value='F9'></div>    
                      <div class='gridCoordinate' value='F10'></div>   

                      
                      <div class='gridCoordinate' value='G1'></div>
                      <div class='gridCoordinate' value='G2'></div>
                      <div class='gridCoordinate' value='G3'></div>    
                      <div class='gridCoordinate' value='G4'></div> 
                      <div class='gridCoordinate' value='G5'></div>   
                      <div class='gridCoordinate' value='G6'></div>    
                      <div class='gridCoordinate' value='G7'></div>    
                      <div class='gridCoordinate' value='G8'></div>    
                      <div class='gridCoordinate' value='G9'></div>    
                      <div class='gridCoordinate' value='G10'></div>   

                      
                      <div class='gridCoordinate' value='H1'></div>
                      <div class='gridCoordinate' value='H2'></div>
                      <div class='gridCoordinate' value='H3'></div>    
                      <div class='gridCoordinate' value='H4'></div>    
                      <div class='gridCoordinate' value='H5'></div>
                      <div class='gridCoordinate' value='H6'></div>    
                      <div class='gridCoordinate' value='H7'></div>    
                      <div class='gridCoordinate' value='H8'></div>    
                      <div class='gridCoordinate' value='H9'></div>    
                      <div class='gridCoordinate' value='H10'></div>   

                      
                      <div class='gridCoordinate' value='I1'></div>
                      <div class='gridCoordinate' value='I2'></div>
                      <div class='gridCoordinate' value='I3'></div>    
                      <div class='gridCoordinate' value='I4'></div>   
                      <div class='gridCoordinate' value='I5'></div> 
                      <div class='gridCoordinate' value='I6'></div>    
                      <div class='gridCoordinate' value='I7'></div>    
                      <div class='gridCoordinate' value='I8'></div>    
                      <div class='gridCoordinate' value='I9'></div>    
                      <div class='gridCoordinate' value='I10'></div>   

                      
                      <div class='gridCoordinate' value='J1'></div>
                      <div class='gridCoordinate' value='J2'></div>
                      <div class='gridCoordinate' value='J3'></div>    
                      <div class='gridCoordinate' value='J4'></div>   
                      <div class='gridCoordinate' value='J5'></div>  
                      <div class='gridCoordinate' value='J6'></div>    
                      <div class='gridCoordinate' value='J7'></div>    
                      <div class='gridCoordinate' value='J8'></div>    
                      <div class='gridCoordinate' value='J9'></div>    
                      <div class='gridCoordinate' value='J10'></div>   

    `

    const highlight = (e) => { 
        // console.log(e)
        if(player1obj.shipList.length === 0){
            e.target.classList.add('ship')
            e.target.nextSibling.nextSibling.classList.add('ship')
            e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('ship')
            e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('ship')
            e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('ship')
        }
    }

    const attack = (e) => {
        console.log(e.target.attributes.value.value)
    }

    content.appendChild(divSection)
    const startSection = document.querySelector('.startGame')

    const createShip = (e) => {
        if(player1obj.shipList.length === 0){
            player1obj.createCarrier(shipAlignment, e.target.attributes.value.value)
            let arr = player1obj.shipList[0].shipCoordinates()
            h1.textContent = 'Place Your Battleship'
            console.log(player1obj.shipList[0])
            arr.forEach(coordinate => {
                gridCoord.forEach((value, index) => {
                    if(value.attributes[1].value===coordinate){
                        value.classList.add('ship')
                    }
                })
            })
            if(player1obj.shipList[0].shipCoordinates().length === 0){
                player1obj.shipList.pop()
                h1.textContent = 'Place Your Carrier'
            }
        }else if(player1obj.shipList.length === 1){
            player1obj.createBattleship(shipAlignment, e.target.attributes.value.value)
            let arr = player1obj.shipList[1].shipCoordinates()
            h1.textContent = 'Place Your Destroyer'
            arr.forEach(coordinate => {
                gridCoord.forEach(value => {
                    if(value.attributes[1].value === coordinate){
                        value.classList.toggle('ship')
                    }
                })
            })
            if(player1obj.shipList[1].shipCoordinates().length === 0){
                player1obj.shipList.pop()
                h1.textContent = 'Place Your Battleship'
            }
        }else if(player1obj.shipList.length === 2){
            player1obj.createDestroyer(shipAlignment, e.target.attributes.value.value)
            let arr = player1obj.shipList[2].shipCoordinates()
            h1.textContent = 'Place Your Submarine'
            arr.forEach(coordinate => {
                gridCoord.forEach(value => {
                    if(value.attributes[1].value === coordinate){
                        value.classList.toggle('ship')
                    }
                })
            })
            if(player1obj.shipList[2].shipCoordinates().length === 0){
                player1obj.shipList.pop()
                h1.textContent = 'Place Your Destroyer'
            }
        }else if(player1obj.shipList.length === 3){
            player1obj.createSubmarine(shipAlignment, e.target.attributes.value.value)
            let arr = player1obj.shipList[3].shipCoordinates()
            h1.textContent = 'Place Your Patrol Boat'
            arr.forEach(coordinate => {
                gridCoord.forEach(value => {
                    if(value.attributes[1].value === coordinate){
                        value.classList.toggle('ship')
                    }
                })
            })
            if(player1obj.shipList[3].shipCoordinates().length === 0){
                player1obj.shipList.pop()
                h1.textContent = 'Place Your Submarine'
            }
        }else if(player1obj.shipList.length === 4){
            player1obj.createPatrolBoat(shipAlignment, e.target.attributes.value.value)
            let arr = player1obj.shipList[4].shipCoordinates()
            h1.textContent = `Click Start Game! `
            // content.appendChild(startSection)
            divSection.appendChild(startGameBtn)
            startGameBtn.addEventListener('click', () => {
                h1.textContent = `ATTACK ENEMY'S BOARD !`
                let enemyGrid = document.createElement('div')
                gameDiv.appendChild(enemyGrid)
                // gameSection.classList.remove('hidden')
                enemyGrid.className = "grid"
                const buttons = document.querySelectorAll('button')
                buttons.forEach(button => {
                    button.classList.add('hidden')
                })
                enemyGrid.innerHTML = `<div class='gridCoordinate enemy' value='A1'></div>
                                  <div class='gridCoordinate enemy' value='A2'></div>
                                  <div class='gridCoordinate enemy' value='A3'></div>    
                                  <div class='gridCoordinate enemy enemy' value='A4'></div> 
                                  <div class='gridCoordinate enemy' value='A5'></div>    
                                  <div class='gridCoordinate enemy' value='A6'></div>    
                                  <div class='gridCoordinate enemy' value='A7'></div>    
                                  <div class='gridCoordinate enemy' value='A8'></div>    
                                  <div class='gridCoordinate enemy' value='A9'></div>    
                                  <div class='gridCoordinate enemy' value='A10'></div>    
            
                                  <div class='gridCoordinate enemy' value='B1'></div>
                                  <div class='gridCoordinate enemy' value='B2'></div>
                                  <div class='gridCoordinate enemy' value='B3'></div>    
                                  <div class='gridCoordinate enemy' value='B4'></div>    
                                  <div class='gridCoordinate enemy' value='B5'></div> 
                                  <div class='gridCoordinate enemy' value='B6'></div>    
                                  <div class='gridCoordinate enemy' value='B7'></div>    
                                  <div class='gridCoordinate enemy' value='B8'></div>    
                                  <div class='gridCoordinate enemy' value='B9'></div>    
                                  <div class='gridCoordinate enemy' value='B10'></div>    
            
                                  
                                  <div class='gridCoordinate enemy' value='C1'></div>
                                  <div class='gridCoordinate enemy' value='C2'></div>
                                  <div class='gridCoordinate enemy' value='C3'></div>    
                                  <div class='gridCoordinate enemy' value='C4'></div> 
                                  <div class='gridCoordinate enemy' value='C5'></div>   
                                  <div class='gridCoordinate enemy' value='C6'></div>    
                                  <div class='gridCoordinate enemy' value='C7'></div>    
                                  <div class='gridCoordinate enemy' value='C8'></div>    
                                  <div class='gridCoordinate enemy' value='C9'></div>    
                                  <div class='gridCoordinate enemy' value='C10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='D1'></div>
                                  <div class='gridCoordinate enemy' value='D2'></div>
                                  <div class='gridCoordinate enemy' value='D3'></div>    
                                  <div class='gridCoordinate enemy' value='D4'></div>    
                                  <div class='gridCoordinate enemy' value='D5'></div> 
                                  <div class='gridCoordinate enemy' value='D6'></div>    
                                  <div class='gridCoordinate enemy' value='D7'></div>    
                                  <div class='gridCoordinate enemy' value='D8'></div>    
                                  <div class='gridCoordinate enemy' value='D9'></div>    
                                  <div class='gridCoordinate enemy' value='D10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='E1'></div>
                                  <div class='gridCoordinate enemy' value='E2'></div>
                                  <div class='gridCoordinate enemy' value='E3'></div>    
                                  <div class='gridCoordinate enemy' value='E4'></div>  
                                  <div class='gridCoordinate enemy' value='E5'></div>  
                                  <div class='gridCoordinate enemy' value='E6'></div>    
                                  <div class='gridCoordinate enemy' value='E7'></div>    
                                  <div class='gridCoordinate enemy' value='E8'></div>    
                                  <div class='gridCoordinate enemy' value='E9'></div>    
                                  <div class='gridCoordinate enemy' value='E10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='F1'></div>
                                  <div class='gridCoordinate enemy' value='F2'></div>
                                  <div class='gridCoordinate enemy' value='F3'></div>    
                                  <div class='gridCoordinate enemy' value='F4'></div>   
                                  <div class='gridCoordinate enemy' value='F5'></div>  
                                  <div class='gridCoordinate enemy' value='F6'></div>    
                                  <div class='gridCoordinate enemy' value='F7'></div>    
                                  <div class='gridCoordinate enemy' value='F8'></div>    
                                  <div class='gridCoordinate enemy' value='F9'></div>    
                                  <div class='gridCoordinate enemy' value='F10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='G1'></div>
                                  <div class='gridCoordinate enemy' value='G2'></div>
                                  <div class='gridCoordinate enemy' value='G3'></div>    
                                  <div class='gridCoordinate enemy' value='G4'></div> 
                                  <div class='gridCoordinate enemy' value='G5'></div>   
                                  <div class='gridCoordinate enemy' value='G6'></div>    
                                  <div class='gridCoordinate enemy' value='G7'></div>    
                                  <div class='gridCoordinate enemy' value='G8'></div>    
                                  <div class='gridCoordinate enemy' value='G9'></div>    
                                  <div class='gridCoordinate enemy' value='G10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='H1'></div>
                                  <div class='gridCoordinate enemy' value='H2'></div>
                                  <div class='gridCoordinate enemy' value='H3'></div>    
                                  <div class='gridCoordinate enemy' value='H4'></div>    
                                  <div class='gridCoordinate enemy' value='H5'></div>
                                  <div class='gridCoordinate enemy' value='H6'></div>    
                                  <div class='gridCoordinate enemy' value='H7'></div>    
                                  <div class='gridCoordinate enemy' value='H8'></div>    
                                  <div class='gridCoordinate enemy' value='H9'></div>    
                                  <div class='gridCoordinate enemy' value='H10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='I1'></div>
                                  <div class='gridCoordinate enemy' value='I2'></div>
                                  <div class='gridCoordinate enemy' value='I3'></div>    
                                  <div class='gridCoordinate enemy' value='I4'></div>   
                                  <div class='gridCoordinate enemy' value='I5'></div> 
                                  <div class='gridCoordinate enemy' value='I6'></div>    
                                  <div class='gridCoordinate enemy' value='I7'></div>    
                                  <div class='gridCoordinate enemy' value='I8'></div>    
                                  <div class='gridCoordinate enemy' value='I9'></div>    
                                  <div class='gridCoordinate enemy' value='I10'></div>   
            
                                  
                                  <div class='gridCoordinate enemy' value='J1'></div>
                                  <div class='gridCoordinate enemy' value='J2'></div>
                                  <div class='gridCoordinate enemy' value='J3'></div>    
                                  <div class='gridCoordinate enemy' value='J4'></div>   
                                  <div class='gridCoordinate enemy' value='J5'></div>  
                                  <div class='gridCoordinate enemy' value='J6'></div>    
                                  <div class='gridCoordinate enemy' value='J7'></div>    
                                  <div class='gridCoordinate enemy' value='J8'></div>    
                                  <div class='gridCoordinate enemy' value='J9'></div>    
                                  <div class='gridCoordinate enemy' value='J10'></div>   
            
                `
                const enemyCoordinates = document.querySelectorAll('.enemy')
                enemyCoordinates.forEach(coordinates => {
                    coordinates.addEventListener('click', attack)
                })
            })
            arr.forEach(coordinate => {
                gridCoord.forEach(value => {
                    if(value.attributes[1].value === coordinate){
                        value.classList.toggle('ship')
                    }
                })
            })
            if(player1obj.shipList[4].shipCoordinates().length === 0){
                player1obj.shipList.pop()
                h1.textContent = 'Place Your Patrol Boat'
            }
        }
    }

    const gridCoord = document.querySelectorAll('.gridCoordinate')
    // gridCoord.forEach(gridSpot => {
    //     gridSpot.addEventListener('mouseover', highlight)
    // })


    gridCoord.forEach(gridSpot => {
        gridSpot.addEventListener('click', createShip)
    })

    verticalButton.addEventListener('click', () => {
        shipAlignment = 'vertical'
    })

    horizontalButton.addEventListener('click', () => {
        shipAlignment = 'horizontal'
    })

    undoButton.addEventListener('click', () => {
        if(player1obj.shipList.length !== 0){
            let arr = player1obj.shipList[player1obj.shipList.length-1].shipCoordinates()
            let shipName = player1obj.shipList[player1obj.shipList.length-1].getType()
            let shipNameCombined = shipName[0].toUpperCase() + shipName.substring(1)
            h1.textContent = `Place Your ${shipNameCombined}`
            arr.forEach(coordinate => {
                gridCoord.forEach(value => {
                    if(value.attributes[1].value === coordinate){
                        value.classList.remove('ship')
                    }
                })
            }) 
            player1obj.shipList.pop()          
        }
    })

}



export { DOM }