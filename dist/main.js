(()=>{"use strict";var i={d:(e,a)=>{for(var d in a)i.o(a,d)&&!i.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)};i.d({},{G:()=>t});const e=()=>{let i=[];return{shipList:i,createCarrier:(e,d)=>{const t=a("carrier",e,d);i.push(t)},createBattleship:(e,d)=>{const t=a("battleship",e,d);i.push(t)},createDestroyer:(e,d)=>{const t=a("destroyer",e,d);i.push(t)},createSubmarine:(e,d)=>{const t=a("submarine",e,d);i.push(t)},createPatrolBoat:(e,d)=>{const t=a("patrol boat",e,d);i.push(t)},createGameboard:i=>d(i),coordinates:{A1:0,A2:0,A3:0,A4:0,A5:0,A6:0,A7:0,A8:0,A9:0,A10:0,B1:0,B2:0,B3:0,B4:0,B5:0,B6:0,B7:0,B8:0,B9:0,B10:0,C1:0,C2:0,C3:0,C4:0,C5:0,C6:0,C7:0,C8:0,C9:0,C10:0,D1:0,D2:0,D3:0,D4:0,D5:0,D6:0,D7:0,D8:0,D9:0,D10:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,E10:0,F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0,F10:0,G1:0,G2:0,G3:0,G4:0,G5:0,G6:0,G7:0,G8:0,G9:0,G10:0,H1:0,H2:0,H3:0,H4:0,H5:0,H6:0,H7:0,H8:0,H9:0,H10:0,I1:0,I2:0,I3:0,I4:0,I5:0,I6:0,I7:0,I8:0,I9:0,I10:0,J1:0,J2:0,J3:0,J4:0,J5:0,J6:0,J7:0,J8:0,J9:0,J10:0}}},a=(i,e,a)=>{let d=0;const t=()=>e,s=a,o=()=>{d="carrier"===i?5:"battleship"===i?4:"destroyer"===i||"submarine"===i?3:"patrol boat"===i?2:null};o();let r=d;const n=()=>0===r;return{shipSize:d,getType:()=>i,shipSizeGetter:o,health:r,sunk:n,hit:()=>(r-=1,0===r&&n(),r),shipCoordinates:()=>{let i=[];if("horizontal"===t()){let e=Number(s.substring(1));if(e-1+d<=10)for(let a=e;a<e+d;a++)i.push(`${s.substring(0,1)}${a}`)}else if("vertical"===t()){let e=["A","B","C","D","E","F","G","H","I","J"],a=Number(s.substring(1)),t=s.substring(0,1),o=e.indexOf(t);if(o+d<=10)for(let t=o;t<o+d;t++)i.push(`${e[t]}${a}`)}return i},getAlignment:t,start:s}},d=i=>({receiveAttack:e=>{for(const a in i.coordinates)if(a===e){if(0===i.coordinates[a])return i.coordinates[a]="X",console.log(i.coordinates),console.log(i.shipList),"miss";if("object"==typeof i.coordinates[a])i.coordinates[a].hit(),console.log(`${i.coordinates[a]} has been hit!`),!0===i.coordinates[a].sunk()&&(i.shipList.splice(i.shipList.indexOf(i.coordinates[a]),1),console.log(`${i.coordinates[a].getType()} has been sunk!`),console.log(i.shipList),0===i.shipList.length&&console.log("you lose!")),i.coordinates[a]="HIT",console.log(i.coordinates);else if("X"===i.coordinates[a]||"HIT"===i.coordinates[a])return"already tried here!"}},letsTry:()=>{console.log(i.shipList)},placeShips:()=>{i.shipList.forEach((e=>{e.shipCoordinates().forEach((a=>{for(const d in i.coordinates)d===a&&(i.coordinates[d]=e)}))}))}});(()=>{const i=document.querySelector("#content");let e="horizontal";i.innerHTML="";const a=document.createElement("div"),d=document.createElement("h1"),s=document.createElement("button"),o=document.createElement("button"),r=document.createElement("button"),n=document.createElement("div");n.className="div_btn",s.textContent="Vertical",o.textContent="Horizontal",r.textContent="Undo",i.appendChild(d),d.textContent="Place Your Carrier",i.appendChild(n),n.appendChild(s),n.appendChild(o),n.appendChild(r),i.appendChild(a),a.className="grid",a.innerHTML="<div class='gridCoordinate' value='A1'></div>\n                      <div class='gridCoordinate' value='A2'></div>\n                      <div class='gridCoordinate' value='A3'></div>    \n                      <div class='gridCoordinate' value='A4'></div> \n                      <div class='gridCoordinate' value='A5'></div>    \n                      <div class='gridCoordinate' value='A6'></div>    \n                      <div class='gridCoordinate' value='A7'></div>    \n                      <div class='gridCoordinate' value='A8'></div>    \n                      <div class='gridCoordinate' value='A9'></div>    \n                      <div class='gridCoordinate' value='A10'></div>    \n\n                      <div class='gridCoordinate' value='B1'></div>\n                      <div class='gridCoordinate' value='B2'></div>\n                      <div class='gridCoordinate' value='B3'></div>    \n                      <div class='gridCoordinate' value='B4'></div>    \n                      <div class='gridCoordinate' value='B5'></div> \n                      <div class='gridCoordinate' value='B6'></div>    \n                      <div class='gridCoordinate' value='B7'></div>    \n                      <div class='gridCoordinate' value='B8'></div>    \n                      <div class='gridCoordinate' value='B9'></div>    \n                      <div class='gridCoordinate' value='B10'></div>    \n\n                      \n                      <div class='gridCoordinate' value='C1'></div>\n                      <div class='gridCoordinate' value='C2'></div>\n                      <div class='gridCoordinate' value='C3'></div>    \n                      <div class='gridCoordinate' value='C4'></div> \n                      <div class='gridCoordinate' value='C5'></div>   \n                      <div class='gridCoordinate' value='C6'></div>    \n                      <div class='gridCoordinate' value='C7'></div>    \n                      <div class='gridCoordinate' value='C8'></div>    \n                      <div class='gridCoordinate' value='C9'></div>    \n                      <div class='gridCoordinate' value='C10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='D1'></div>\n                      <div class='gridCoordinate' value='D2'></div>\n                      <div class='gridCoordinate' value='D3'></div>    \n                      <div class='gridCoordinate' value='D4'></div>    \n                      <div class='gridCoordinate' value='D5'></div> \n                      <div class='gridCoordinate' value='D6'></div>    \n                      <div class='gridCoordinate' value='D7'></div>    \n                      <div class='gridCoordinate' value='D8'></div>    \n                      <div class='gridCoordinate' value='D9'></div>    \n                      <div class='gridCoordinate' value='D10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='E1'></div>\n                      <div class='gridCoordinate' value='E2'></div>\n                      <div class='gridCoordinate' value='E3'></div>    \n                      <div class='gridCoordinate' value='E4'></div>  \n                      <div class='gridCoordinate' value='E5'></div>  \n                      <div class='gridCoordinate' value='E6'></div>    \n                      <div class='gridCoordinate' value='E7'></div>    \n                      <div class='gridCoordinate' value='E8'></div>    \n                      <div class='gridCoordinate' value='E9'></div>    \n                      <div class='gridCoordinate' value='E10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='F1'></div>\n                      <div class='gridCoordinate' value='F2'></div>\n                      <div class='gridCoordinate' value='F3'></div>    \n                      <div class='gridCoordinate' value='F4'></div>   \n                      <div class='gridCoordinate' value='F5'></div>  \n                      <div class='gridCoordinate' value='F6'></div>    \n                      <div class='gridCoordinate' value='F7'></div>    \n                      <div class='gridCoordinate' value='F8'></div>    \n                      <div class='gridCoordinate' value='F9'></div>    \n                      <div class='gridCoordinate' value='F10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='G1'></div>\n                      <div class='gridCoordinate' value='G2'></div>\n                      <div class='gridCoordinate' value='G3'></div>    \n                      <div class='gridCoordinate' value='G4'></div> \n                      <div class='gridCoordinate' value='G5'></div>   \n                      <div class='gridCoordinate' value='G6'></div>    \n                      <div class='gridCoordinate' value='G7'></div>    \n                      <div class='gridCoordinate' value='G8'></div>    \n                      <div class='gridCoordinate' value='G9'></div>    \n                      <div class='gridCoordinate' value='G10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='H1'></div>\n                      <div class='gridCoordinate' value='H2'></div>\n                      <div class='gridCoordinate' value='H3'></div>    \n                      <div class='gridCoordinate' value='H4'></div>    \n                      <div class='gridCoordinate' value='H5'></div>\n                      <div class='gridCoordinate' value='H6'></div>    \n                      <div class='gridCoordinate' value='H7'></div>    \n                      <div class='gridCoordinate' value='H8'></div>    \n                      <div class='gridCoordinate' value='H9'></div>    \n                      <div class='gridCoordinate' value='H10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='I1'></div>\n                      <div class='gridCoordinate' value='I2'></div>\n                      <div class='gridCoordinate' value='I3'></div>    \n                      <div class='gridCoordinate' value='I4'></div>   \n                      <div class='gridCoordinate' value='I5'></div> \n                      <div class='gridCoordinate' value='I6'></div>    \n                      <div class='gridCoordinate' value='I7'></div>    \n                      <div class='gridCoordinate' value='I8'></div>    \n                      <div class='gridCoordinate' value='I9'></div>    \n                      <div class='gridCoordinate' value='I10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='J1'></div>\n                      <div class='gridCoordinate' value='J2'></div>\n                      <div class='gridCoordinate' value='J3'></div>    \n                      <div class='gridCoordinate' value='J4'></div>   \n                      <div class='gridCoordinate' value='J5'></div>  \n                      <div class='gridCoordinate' value='J6'></div>    \n                      <div class='gridCoordinate' value='J7'></div>    \n                      <div class='gridCoordinate' value='J8'></div>    \n                      <div class='gridCoordinate' value='J9'></div>    \n                      <div class='gridCoordinate' value='J10'></div>   \n\n    ";const l=i=>{if(0===t.shipList.length){t.createCarrier(e,i.target.attributes.value.value);let a=t.shipList[0].shipCoordinates();d.textContent="Place Your Battleship",console.log(t.shipList[0]),a.forEach((i=>{v.forEach(((e,a)=>{e.attributes[1].value===i&&e.classList.add("ship")}))})),0===t.shipList[0].shipCoordinates().length&&(t.shipList.pop(),d.textContent="Place Your Carrier")}else if(1===t.shipList.length){t.createBattleship(e,i.target.attributes.value.value);let a=t.shipList[1].shipCoordinates();d.textContent="Place Your Destroyer",a.forEach((i=>{v.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===t.shipList[1].shipCoordinates().length&&(t.shipList.pop(),d.textContent="Place Your Battleship")}else if(2===t.shipList.length){t.createDestroyer(e,i.target.attributes.value.value);let a=t.shipList[2].shipCoordinates();d.textContent="Place Your Submarine",a.forEach((i=>{v.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===t.shipList[2].shipCoordinates().length&&(t.shipList.pop(),d.textContent="Place Your Destroyer")}else if(3===t.shipList.length){t.createSubmarine(e,i.target.attributes.value.value);let a=t.shipList[3].shipCoordinates();d.textContent="Place Your Patrol Boat",a.forEach((i=>{v.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===t.shipList[3].shipCoordinates().length&&(t.shipList.pop(),d.textContent="Place Your Submarine")}else if(4===t.shipList.length){t.createPatrolBoat(e,i.target.attributes.value.value);let a=t.shipList[4].shipCoordinates();d.textContent="Match Starting",a.forEach((i=>{v.forEach((e=>{e.attributes[1].value===i&&e.classList.toggle("ship")}))})),0===t.shipList[4].shipCoordinates().length&&(t.shipList.pop(),d.textContent="Place Your Patrol Boat")}},v=document.querySelectorAll(".gridCoordinate");v.forEach((i=>{i.addEventListener("click",l)})),s.addEventListener("click",(()=>{e="vertical"})),o.addEventListener("click",(()=>{e="horizontal"})),r.addEventListener("click",(()=>{if(0!==t.shipList.length){let i=t.shipList[t.shipList.length-1].shipCoordinates(),e=t.shipList[t.shipList.length-1].getType(),a=e[0].toUpperCase()+e.substring(1);d.textContent=`Place Your ${a}`,i.forEach((i=>{v.forEach((e=>{e.attributes[1].value===i&&e.classList.remove("ship")}))})),t.shipList.pop()}}))})();const t=e();e()})();