(()=>{"use strict";var i={d:(e,d)=>{for(var a in d)i.o(d,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:d[a]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)};i.d({},{G:()=>n});const e=()=>{let i=[];return{shipList:i,createCarrier:(e,a)=>{const n=d("carrier",e,a);i.push(n)},createBattleship:(e,a)=>{const n=d("battleship",e,a);i.push(n)},createDestroyer:(e,a)=>{const n=d("destroyer",e,a);i.push(n)},createSubmarine:(e,a)=>{const n=d("submarine",e,a);i.push(n)},createPatrolBoat:(e,a)=>{const n=d("patrol boat",e,a);i.push(n)},createGameboard:i=>a(i),coordinates:{A1:0,A2:0,A3:0,A4:0,A5:0,A6:0,A7:0,A8:0,A9:0,A10:0,B1:0,B2:0,B3:0,B4:0,B5:0,B6:0,B7:0,B8:0,B9:0,B10:0,C1:0,C2:0,C3:0,C4:0,C5:0,C6:0,C7:0,C8:0,C9:0,C10:0,D1:0,D2:0,D3:0,D4:0,D5:0,D6:0,D7:0,D8:0,D9:0,D10:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,E10:0,F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0,F10:0,G1:0,G2:0,G3:0,G4:0,G5:0,G6:0,G7:0,G8:0,G9:0,G10:0,H1:0,H2:0,H3:0,H4:0,H5:0,H6:0,H7:0,H8:0,H9:0,H10:0,I1:0,I2:0,I3:0,I4:0,I5:0,I6:0,I7:0,I8:0,I9:0,I10:0,J1:0,J2:0,J3:0,J4:0,J5:0,J6:0,J7:0,J8:0,J9:0,J10:0}}},d=(i,e,d)=>{let a=0;const n=()=>e,s=d,o=()=>{a="carrier"===i?5:"battleship"===i?4:"destroyer"===i||"submarine"===i?3:"patrol boat"===i?2:null};o();let v=a;const r=()=>0===v;return{shipSize:a,getType:()=>i,shipSizeGetter:o,health:v,sunk:r,hit:()=>(v-=1,0===v&&r(),v),shipCoordinates:()=>{let i=[];if("horizontal"===n()){let e=Number(s.substring(1));if(e-1+a<=10)for(let d=e;d<e+a;d++)i.push(`${s.substring(0,1)}${d}`)}else if("vertical"===n()){let e=["A","B","C","D","E","F","G","H","I","J"],d=Number(s.substring(1)),n=s.substring(0,1),o=e.indexOf(n);if(o+a<=10)for(let n=o;n<o+a;n++)i.push(`${e[n]}${d}`)}return i},getAlignment:n,start:s}},a=i=>({receiveAttack:e=>{for(const d in i.coordinates)if(d===e){if(0===i.coordinates[d])return i.coordinates[d]="X",console.log(i.coordinates),console.log(i.shipList),"miss";if("object"==typeof i.coordinates[d])i.coordinates[d].hit(),console.log(`${i.coordinates[d]} has been hit!`),!0===i.coordinates[d].sunk()&&(i.shipList.splice(i.shipList.indexOf(i.coordinates[d]),1),console.log(`${i.coordinates[d].getType()} has been sunk!`),console.log(i.shipList),0===i.shipList.length&&console.log("you lose!")),i.coordinates[d]="HIT",console.log(i.coordinates);else if("X"===i.coordinates[d]||"HIT"===i.coordinates[d])return"already tried here!"}},letsTry:()=>{console.log(i.shipList)},placeShips:()=>{i.shipList.forEach((e=>{e.shipCoordinates().forEach((d=>{for(const a in i.coordinates)a===d&&(i.coordinates[a]=e)}))}))}});(()=>{const i=document.querySelector("#content");let e="horizontal";i.innerHTML="";const d=document.createElement("div"),a=document.createElement("h1"),s=document.createElement("button"),o=document.createElement("button"),v=document.createElement("button"),r=document.createElement("div"),t=document.createElement("button"),l=document.createElement("div");l.className="startGame",t.textContent="Start Game",t.className="start_btn",r.className="div_btn",s.textContent="Vertical",o.textContent="Horizontal",v.textContent="Undo",i.appendChild(a);const c=document.querySelector(".game");a.textContent="Place Your Carrier",i.appendChild(r),r.appendChild(s),r.appendChild(o),r.appendChild(v),i.appendChild(d),d.className="grid",d.innerHTML="<div class='gridCoordinate' value='A1'></div>\n                      <div class='gridCoordinate' value='A2'></div>\n                      <div class='gridCoordinate' value='A3'></div>    \n                      <div class='gridCoordinate' value='A4'></div> \n                      <div class='gridCoordinate' value='A5'></div>    \n                      <div class='gridCoordinate' value='A6'></div>    \n                      <div class='gridCoordinate' value='A7'></div>    \n                      <div class='gridCoordinate' value='A8'></div>    \n                      <div class='gridCoordinate' value='A9'></div>    \n                      <div class='gridCoordinate' value='A10'></div>    \n\n                      <div class='gridCoordinate' value='B1'></div>\n                      <div class='gridCoordinate' value='B2'></div>\n                      <div class='gridCoordinate' value='B3'></div>    \n                      <div class='gridCoordinate' value='B4'></div>    \n                      <div class='gridCoordinate' value='B5'></div> \n                      <div class='gridCoordinate' value='B6'></div>    \n                      <div class='gridCoordinate' value='B7'></div>    \n                      <div class='gridCoordinate' value='B8'></div>    \n                      <div class='gridCoordinate' value='B9'></div>    \n                      <div class='gridCoordinate' value='B10'></div>    \n\n                      \n                      <div class='gridCoordinate' value='C1'></div>\n                      <div class='gridCoordinate' value='C2'></div>\n                      <div class='gridCoordinate' value='C3'></div>    \n                      <div class='gridCoordinate' value='C4'></div> \n                      <div class='gridCoordinate' value='C5'></div>   \n                      <div class='gridCoordinate' value='C6'></div>    \n                      <div class='gridCoordinate' value='C7'></div>    \n                      <div class='gridCoordinate' value='C8'></div>    \n                      <div class='gridCoordinate' value='C9'></div>    \n                      <div class='gridCoordinate' value='C10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='D1'></div>\n                      <div class='gridCoordinate' value='D2'></div>\n                      <div class='gridCoordinate' value='D3'></div>    \n                      <div class='gridCoordinate' value='D4'></div>    \n                      <div class='gridCoordinate' value='D5'></div> \n                      <div class='gridCoordinate' value='D6'></div>    \n                      <div class='gridCoordinate' value='D7'></div>    \n                      <div class='gridCoordinate' value='D8'></div>    \n                      <div class='gridCoordinate' value='D9'></div>    \n                      <div class='gridCoordinate' value='D10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='E1'></div>\n                      <div class='gridCoordinate' value='E2'></div>\n                      <div class='gridCoordinate' value='E3'></div>    \n                      <div class='gridCoordinate' value='E4'></div>  \n                      <div class='gridCoordinate' value='E5'></div>  \n                      <div class='gridCoordinate' value='E6'></div>    \n                      <div class='gridCoordinate' value='E7'></div>    \n                      <div class='gridCoordinate' value='E8'></div>    \n                      <div class='gridCoordinate' value='E9'></div>    \n                      <div class='gridCoordinate' value='E10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='F1'></div>\n                      <div class='gridCoordinate' value='F2'></div>\n                      <div class='gridCoordinate' value='F3'></div>    \n                      <div class='gridCoordinate' value='F4'></div>   \n                      <div class='gridCoordinate' value='F5'></div>  \n                      <div class='gridCoordinate' value='F6'></div>    \n                      <div class='gridCoordinate' value='F7'></div>    \n                      <div class='gridCoordinate' value='F8'></div>    \n                      <div class='gridCoordinate' value='F9'></div>    \n                      <div class='gridCoordinate' value='F10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='G1'></div>\n                      <div class='gridCoordinate' value='G2'></div>\n                      <div class='gridCoordinate' value='G3'></div>    \n                      <div class='gridCoordinate' value='G4'></div> \n                      <div class='gridCoordinate' value='G5'></div>   \n                      <div class='gridCoordinate' value='G6'></div>    \n                      <div class='gridCoordinate' value='G7'></div>    \n                      <div class='gridCoordinate' value='G8'></div>    \n                      <div class='gridCoordinate' value='G9'></div>    \n                      <div class='gridCoordinate' value='G10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='H1'></div>\n                      <div class='gridCoordinate' value='H2'></div>\n                      <div class='gridCoordinate' value='H3'></div>    \n                      <div class='gridCoordinate' value='H4'></div>    \n                      <div class='gridCoordinate' value='H5'></div>\n                      <div class='gridCoordinate' value='H6'></div>    \n                      <div class='gridCoordinate' value='H7'></div>    \n                      <div class='gridCoordinate' value='H8'></div>    \n                      <div class='gridCoordinate' value='H9'></div>    \n                      <div class='gridCoordinate' value='H10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='I1'></div>\n                      <div class='gridCoordinate' value='I2'></div>\n                      <div class='gridCoordinate' value='I3'></div>    \n                      <div class='gridCoordinate' value='I4'></div>   \n                      <div class='gridCoordinate' value='I5'></div> \n                      <div class='gridCoordinate' value='I6'></div>    \n                      <div class='gridCoordinate' value='I7'></div>    \n                      <div class='gridCoordinate' value='I8'></div>    \n                      <div class='gridCoordinate' value='I9'></div>    \n                      <div class='gridCoordinate' value='I10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='J1'></div>\n                      <div class='gridCoordinate' value='J2'></div>\n                      <div class='gridCoordinate' value='J3'></div>    \n                      <div class='gridCoordinate' value='J4'></div>   \n                      <div class='gridCoordinate' value='J5'></div>  \n                      <div class='gridCoordinate' value='J6'></div>    \n                      <div class='gridCoordinate' value='J7'></div>    \n                      <div class='gridCoordinate' value='J8'></div>    \n                      <div class='gridCoordinate' value='J9'></div>    \n                      <div class='gridCoordinate' value='J10'></div>   \n\n    ",i.appendChild(l),document.querySelector(".startGame");const u=i=>{if(0===n.shipList.length){n.createCarrier(e,i.target.attributes.value.value);let d=n.shipList[0].shipCoordinates();a.textContent="Place Your Battleship",console.log(n.shipList[0]),d.forEach((i=>{C.forEach(((e,d)=>{e.attributes[1].value===i&&e.classList.add("ship")}))})),0===n.shipList[0].shipCoordinates().length&&(n.shipList.pop(),a.textContent="Place Your Carrier")}else if(1===n.shipList.length){n.createBattleship(e,i.target.attributes.value.value);let d=n.shipList[1].shipCoordinates();a.textContent="Place Your Destroyer",d.forEach((i=>{C.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===n.shipList[1].shipCoordinates().length&&(n.shipList.pop(),a.textContent="Place Your Battleship")}else if(2===n.shipList.length){n.createDestroyer(e,i.target.attributes.value.value);let d=n.shipList[2].shipCoordinates();a.textContent="Place Your Submarine",d.forEach((i=>{C.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===n.shipList[2].shipCoordinates().length&&(n.shipList.pop(),a.textContent="Place Your Destroyer")}else if(3===n.shipList.length){n.createSubmarine(e,i.target.attributes.value.value);let d=n.shipList[3].shipCoordinates();a.textContent="Place Your Patrol Boat",d.forEach((i=>{C.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===n.shipList[3].shipCoordinates().length&&(n.shipList.pop(),a.textContent="Place Your Submarine")}else if(4===n.shipList.length){n.createPatrolBoat(e,i.target.attributes.value.value);let d=n.shipList[4].shipCoordinates();a.textContent="Click Start Game! ",l.appendChild(t),t.addEventListener("click",(()=>{a.textContent="ATTACK ENEMY'S BOARD !";let i=document.createElement("div");c.appendChild(i),c.classList.remove("hidden"),i.className="grid",document.querySelectorAll("button").forEach((i=>{i.classList.add("hidden")})),i.innerHTML="<div class='gridCoordinate enemy' value='A1'></div>\n                                  <div class='gridCoordinate enemy' value='A2'></div>\n                                  <div class='gridCoordinate enemy' value='A3'></div>    \n                                  <div class='gridCoordinate enemy enemy' value='A4'></div> \n                                  <div class='gridCoordinate enemy' value='A5'></div>    \n                                  <div class='gridCoordinate enemy' value='A6'></div>    \n                                  <div class='gridCoordinate enemy' value='A7'></div>    \n                                  <div class='gridCoordinate enemy' value='A8'></div>    \n                                  <div class='gridCoordinate enemy' value='A9'></div>    \n                                  <div class='gridCoordinate enemy' value='A10'></div>    \n            \n                                  <div class='gridCoordinate enemy' value='B1'></div>\n                                  <div class='gridCoordinate enemy' value='B2'></div>\n                                  <div class='gridCoordinate enemy' value='B3'></div>    \n                                  <div class='gridCoordinate enemy' value='B4'></div>    \n                                  <div class='gridCoordinate enemy' value='B5'></div> \n                                  <div class='gridCoordinate enemy' value='B6'></div>    \n                                  <div class='gridCoordinate enemy' value='B7'></div>    \n                                  <div class='gridCoordinate enemy' value='B8'></div>    \n                                  <div class='gridCoordinate enemy' value='B9'></div>    \n                                  <div class='gridCoordinate enemy' value='B10'></div>    \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='C1'></div>\n                                  <div class='gridCoordinate enemy' value='C2'></div>\n                                  <div class='gridCoordinate enemy' value='C3'></div>    \n                                  <div class='gridCoordinate enemy' value='C4'></div> \n                                  <div class='gridCoordinate enemy' value='C5'></div>   \n                                  <div class='gridCoordinate enemy' value='C6'></div>    \n                                  <div class='gridCoordinate enemy' value='C7'></div>    \n                                  <div class='gridCoordinate enemy' value='C8'></div>    \n                                  <div class='gridCoordinate enemy' value='C9'></div>    \n                                  <div class='gridCoordinate enemy' value='C10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='D1'></div>\n                                  <div class='gridCoordinate enemy' value='D2'></div>\n                                  <div class='gridCoordinate enemy' value='D3'></div>    \n                                  <div class='gridCoordinate enemy' value='D4'></div>    \n                                  <div class='gridCoordinate enemy' value='D5'></div> \n                                  <div class='gridCoordinate enemy' value='D6'></div>    \n                                  <div class='gridCoordinate enemy' value='D7'></div>    \n                                  <div class='gridCoordinate enemy' value='D8'></div>    \n                                  <div class='gridCoordinate enemy' value='D9'></div>    \n                                  <div class='gridCoordinate enemy' value='D10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='E1'></div>\n                                  <div class='gridCoordinate enemy' value='E2'></div>\n                                  <div class='gridCoordinate enemy' value='E3'></div>    \n                                  <div class='gridCoordinate enemy' value='E4'></div>  \n                                  <div class='gridCoordinate enemy' value='E5'></div>  \n                                  <div class='gridCoordinate enemy' value='E6'></div>    \n                                  <div class='gridCoordinate enemy' value='E7'></div>    \n                                  <div class='gridCoordinate enemy' value='E8'></div>    \n                                  <div class='gridCoordinate enemy' value='E9'></div>    \n                                  <div class='gridCoordinate enemy' value='E10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='F1'></div>\n                                  <div class='gridCoordinate enemy' value='F2'></div>\n                                  <div class='gridCoordinate enemy' value='F3'></div>    \n                                  <div class='gridCoordinate enemy' value='F4'></div>   \n                                  <div class='gridCoordinate enemy' value='F5'></div>  \n                                  <div class='gridCoordinate enemy' value='F6'></div>    \n                                  <div class='gridCoordinate enemy' value='F7'></div>    \n                                  <div class='gridCoordinate enemy' value='F8'></div>    \n                                  <div class='gridCoordinate enemy' value='F9'></div>    \n                                  <div class='gridCoordinate enemy' value='F10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='G1'></div>\n                                  <div class='gridCoordinate enemy' value='G2'></div>\n                                  <div class='gridCoordinate enemy' value='G3'></div>    \n                                  <div class='gridCoordinate enemy' value='G4'></div> \n                                  <div class='gridCoordinate enemy' value='G5'></div>   \n                                  <div class='gridCoordinate enemy' value='G6'></div>    \n                                  <div class='gridCoordinate enemy' value='G7'></div>    \n                                  <div class='gridCoordinate enemy' value='G8'></div>    \n                                  <div class='gridCoordinate enemy' value='G9'></div>    \n                                  <div class='gridCoordinate enemy' value='G10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='H1'></div>\n                                  <div class='gridCoordinate enemy' value='H2'></div>\n                                  <div class='gridCoordinate enemy' value='H3'></div>    \n                                  <div class='gridCoordinate enemy' value='H4'></div>    \n                                  <div class='gridCoordinate enemy' value='H5'></div>\n                                  <div class='gridCoordinate enemy' value='H6'></div>    \n                                  <div class='gridCoordinate enemy' value='H7'></div>    \n                                  <div class='gridCoordinate enemy' value='H8'></div>    \n                                  <div class='gridCoordinate enemy' value='H9'></div>    \n                                  <div class='gridCoordinate enemy' value='H10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='I1'></div>\n                                  <div class='gridCoordinate enemy' value='I2'></div>\n                                  <div class='gridCoordinate enemy' value='I3'></div>    \n                                  <div class='gridCoordinate enemy' value='I4'></div>   \n                                  <div class='gridCoordinate enemy' value='I5'></div> \n                                  <div class='gridCoordinate enemy' value='I6'></div>    \n                                  <div class='gridCoordinate enemy' value='I7'></div>    \n                                  <div class='gridCoordinate enemy' value='I8'></div>    \n                                  <div class='gridCoordinate enemy' value='I9'></div>    \n                                  <div class='gridCoordinate enemy' value='I10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='J1'></div>\n                                  <div class='gridCoordinate enemy' value='J2'></div>\n                                  <div class='gridCoordinate enemy' value='J3'></div>    \n                                  <div class='gridCoordinate enemy' value='J4'></div>   \n                                  <div class='gridCoordinate enemy' value='J5'></div>  \n                                  <div class='gridCoordinate enemy' value='J6'></div>    \n                                  <div class='gridCoordinate enemy' value='J7'></div>    \n                                  <div class='gridCoordinate enemy' value='J8'></div>    \n                                  <div class='gridCoordinate enemy' value='J9'></div>    \n                                  <div class='gridCoordinate enemy' value='J10'></div>   \n            \n                ",console.log("yurrp")})),d.forEach((i=>{C.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===n.shipList[4].shipCoordinates().length&&(n.shipList.pop(),a.textContent="Place Your Patrol Boat")}},C=document.querySelectorAll(".gridCoordinate");C.forEach((i=>{i.addEventListener("click",u)})),s.addEventListener("click",(()=>{e="vertical"})),o.addEventListener("click",(()=>{e="horizontal"})),v.addEventListener("click",(()=>{if(0!==n.shipList.length){let i=n.shipList[n.shipList.length-1].shipCoordinates(),e=n.shipList[n.shipList.length-1].getType(),d=e[0].toUpperCase()+e.substring(1);a.textContent=`Place Your ${d}`,i.forEach((i=>{C.forEach((e=>{e.attributes[1].value===i&&e.classList.remove("ship")}))})),n.shipList.pop()}}))})();const n=e();e()})();