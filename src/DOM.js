const DOM = () => {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    const grid = document.createElement('div')
    content.appendChild(grid)
    grid.className = "grid"
    grid.innerHTML = `<div class='gridCoordinate' value='A1'></div>
                      <div class='gridCoordinate' value='A2'></div>
                      <div class='gridCoordinate' value='A3'></div>    
                      <div class='gridCoordinate' value='A4'></div>    
                      <div class='gridCoordinate' value='A6'></div>    
                      <div class='gridCoordinate' value='A7'></div>    
                      <div class='gridCoordinate' value='A8'></div>    
                      <div class='gridCoordinate' value='A9'></div>    
                      <div class='gridCoordinate' value='A10'></div>    

                      <div class='gridCoordinate' value='B1'></div>
                      <div class='gridCoordinate' value='B2'></div>
                      <div class='gridCoordinate' value='B3'></div>    
                      <div class='gridCoordinate' value='B4'></div>    
                      <div class='gridCoordinate' value='B6'></div>    
                      <div class='gridCoordinate' value='B7'></div>    
                      <div class='gridCoordinate' value='B8'></div>    
                      <div class='gridCoordinate' value='B9'></div>    
                      <div class='gridCoordinate' value='B10'></div>    

                      
                      <div class='gridCoordinate' value='C1'></div>
                      <div class='gridCoordinate' value='C2'></div>
                      <div class='gridCoordinate' value='C3'></div>    
                      <div class='gridCoordinate' value='C4'></div>    
                      <div class='gridCoordinate' value='C6'></div>    
                      <div class='gridCoordinate' value='C7'></div>    
                      <div class='gridCoordinate' value='C8'></div>    
                      <div class='gridCoordinate' value='C9'></div>    
                      <div class='gridCoordinate' value='C10'></div>   

                      
                      <div class='gridCoordinate' value='D1'></div>
                      <div class='gridCoordinate' value='D2'></div>
                      <div class='gridCoordinate' value='D3'></div>    
                      <div class='gridCoordinate' value='D4'></div>    
                      <div class='gridCoordinate' value='D6'></div>    
                      <div class='gridCoordinate' value='D7'></div>    
                      <div class='gridCoordinate' value='D8'></div>    
                      <div class='gridCoordinate' value='D9'></div>    
                      <div class='gridCoordinate' value='D10'></div>   

                      
                      <div class='gridCoordinate' value='E1'></div>
                      <div class='gridCoordinate' value='E2'></div>
                      <div class='gridCoordinate' value='E3'></div>    
                      <div class='gridCoordinate' value='E4'></div>    
                      <div class='gridCoordinate' value='E6'></div>    
                      <div class='gridCoordinate' value='E7'></div>    
                      <div class='gridCoordinate' value='E8'></div>    
                      <div class='gridCoordinate' value='E9'></div>    
                      <div class='gridCoordinate' value='E10'></div>   

                      
                      <div class='gridCoordinate' value='F1'></div>
                      <div class='gridCoordinate' value='F2'></div>
                      <div class='gridCoordinate' value='F3'></div>    
                      <div class='gridCoordinate' value='F4'></div>    
                      <div class='gridCoordinate' value='F6'></div>    
                      <div class='gridCoordinate' value='F7'></div>    
                      <div class='gridCoordinate' value='F8'></div>    
                      <div class='gridCoordinate' value='F9'></div>    
                      <div class='gridCoordinate' value='F10'></div>   

                      
                      <div class='gridCoordinate' value='G1'></div>
                      <div class='gridCoordinate' value='G2'></div>
                      <div class='gridCoordinate' value='G3'></div>    
                      <div class='gridCoordinate' value='G4'></div>    
                      <div class='gridCoordinate' value='G6'></div>    
                      <div class='gridCoordinate' value='G7'></div>    
                      <div class='gridCoordinate' value='G8'></div>    
                      <div class='gridCoordinate' value='G9'></div>    
                      <div class='gridCoordinate' value='G10'></div>   

                      
                      <div class='gridCoordinate' value='H1'></div>
                      <div class='gridCoordinate' value='H2'></div>
                      <div class='gridCoordinate' value='H3'></div>    
                      <div class='gridCoordinate' value='H4'></div>    
                      <div class='gridCoordinate' value='H6'></div>    
                      <div class='gridCoordinate' value='H7'></div>    
                      <div class='gridCoordinate' value='H8'></div>    
                      <div class='gridCoordinate' value='H9'></div>    
                      <div class='gridCoordinate' value='H10'></div>   

                      
                      <div class='gridCoordinate' value='I1'></div>
                      <div class='gridCoordinate' value='I2'></div>
                      <div class='gridCoordinate' value='I3'></div>    
                      <div class='gridCoordinate' value='I4'></div>    
                      <div class='gridCoordinate' value='I6'></div>    
                      <div class='gridCoordinate' value='I7'></div>    
                      <div class='gridCoordinate' value='I8'></div>    
                      <div class='gridCoordinate' value='I9'></div>    
                      <div class='gridCoordinate' value='I10'></div>   

                      
                      <div class='gridCoordinate' value='J1'></div>
                      <div class='gridCoordinate' value='J2'></div>
                      <div class='gridCoordinate' value='J3'></div>    
                      <div class='gridCoordinate' value='J4'></div>    
                      <div class='gridCoordinate' value='J6'></div>    
                      <div class='gridCoordinate' value='J7'></div>    
                      <div class='gridCoordinate' value='J8'></div>    
                      <div class='gridCoordinate' value='J9'></div>    
                      <div class='gridCoordinate' value='J10'></div>   

    `

    const createShip = () => {

        
    }

    const gridCoord = document.querySelectorAll('.gridCoordinate')
    gridCoord.forEach(grid => {
        grid.addEventListener('mouseover', createShip)
    })


}


export { DOM }