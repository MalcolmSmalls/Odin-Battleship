(()=>{"use strict";var i={d:(d,a)=>{for(var e in a)i.o(a,e)&&!i.o(d,e)&&Object.defineProperty(d,e,{enumerable:!0,get:a[e]})},o:(i,d)=>Object.prototype.hasOwnProperty.call(i,d)};i.d({},{G:()=>r});const d=()=>{let i=[];return{shipList:i,createCarrier:(d,e)=>{const o=a("carrier",d,e);i.push(o)},createBattleship:(d,e)=>{const o=a("battleship",d,e);i.push(o)},createDestroyer:(d,e)=>{const o=a("destroyer",d,e);i.push(o)},createSubmarine:(d,e)=>{const o=a("submarine",d,e);i.push(o)},createPatrolBoat:(d,e)=>{const o=a("patrol boat",d,e);i.push(o)},createGameboard:i=>e(i),coordinates:{A1:0,A2:0,A3:0,A4:0,A5:0,A6:0,A7:0,A8:0,A9:0,A10:0,B1:0,B2:0,B3:0,B4:0,B5:0,B6:0,B7:0,B8:0,B9:0,B10:0,C1:0,C2:0,C3:0,C4:0,C5:0,C6:0,C7:0,C8:0,C9:0,C10:0,D1:0,D2:0,D3:0,D4:0,D5:0,D6:0,D7:0,D8:0,D9:0,D10:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,E10:0,F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0,F10:0,G1:0,G2:0,G3:0,G4:0,G5:0,G6:0,G7:0,G8:0,G9:0,G10:0,H1:0,H2:0,H3:0,H4:0,H5:0,H6:0,H7:0,H8:0,H9:0,H10:0,I1:0,I2:0,I3:0,I4:0,I5:0,I6:0,I7:0,I8:0,I9:0,I10:0,J1:0,J2:0,J3:0,J4:0,J5:0,J6:0,J7:0,J8:0,J9:0,J10:0}}},a=(i,d,a)=>{let e=0;const o=()=>d,r=a,s=()=>{e="carrier"===i?5:"battleship"===i?4:"destroyer"===i||"submarine"===i?3:"patrol boat"===i?2:null};s();let n=e;const v=()=>0===n;return{shipSize:e,getType:()=>i,shipSizeGetter:s,health:n,sunk:v,hit:()=>(n-=1,0===n&&v(),n),shipCoordinates:()=>{let i=[];if("horizontal"===o()){let d=Number(r.substring(1));if(!(d-1+e<=10))return;for(let a=d;a<d+e;a++)i.push(`${r.substring(0,1)}${a}`)}else if("vertical"===o()){let d=["A","B","C","D","E","F","G","H","I","J"],a=Number(r.substring(1)),o=r.substring(0,1),s=d.indexOf(o);if(!(s+e<=10))return;for(let o=s;o<s+e;o++)i.push(`${d[o]}${a}`)}return i},getAlignment:o,start:r}},e=i=>({receiveAttack:d=>{for(const a in i.coordinates)if(a===d){if(0===i.coordinates[a])return i.coordinates[a]="X",console.log(i.coordinates),console.log(i.shipList),"miss";if("object"==typeof i.coordinates[a])i.coordinates[a].hit(),console.log(`${i.coordinates[a]} has been hit!`),!0===i.coordinates[a].sunk()&&(i.shipList.splice(i.shipList.indexOf(i.coordinates[a]),1),console.log(`${i.coordinates[a].getType()} has been sunk!`),console.log(i.shipList),0===i.shipList.length&&console.log("you lose!")),i.coordinates[a]="HIT",console.log(i.coordinates);else if("X"===i.coordinates[a]||"HIT"===i.coordinates[a])return"already tried here!"}},letsTry:()=>{console.log(i.shipList)},placeShips:()=>{i.shipList.forEach((d=>{d.shipCoordinates().forEach((a=>{for(const e in i.coordinates)e===a&&(i.coordinates[e]=d)}))}))}});(()=>{const i=document.querySelector("#content");i.innerHTML="";const d=document.createElement("div");i.appendChild(d),d.className="grid",d.innerHTML="<div class='gridCoordinate' value='A1'></div>\n                      <div class='gridCoordinate' value='A2'></div>\n                      <div class='gridCoordinate' value='A3'></div>    \n                      <div class='gridCoordinate' value='A4'></div>    \n                      <div class='gridCoordinate' value='A6'></div>    \n                      <div class='gridCoordinate' value='A7'></div>    \n                      <div class='gridCoordinate' value='A8'></div>    \n                      <div class='gridCoordinate' value='A9'></div>    \n                      <div class='gridCoordinate' value='A10'></div>    \n\n                      <div class='gridCoordinate' value='B1'></div>\n                      <div class='gridCoordinate' value='B2'></div>\n                      <div class='gridCoordinate' value='B3'></div>    \n                      <div class='gridCoordinate' value='B4'></div>    \n                      <div class='gridCoordinate' value='B6'></div>    \n                      <div class='gridCoordinate' value='B7'></div>    \n                      <div class='gridCoordinate' value='B8'></div>    \n                      <div class='gridCoordinate' value='B9'></div>    \n                      <div class='gridCoordinate' value='B10'></div>    \n\n                      \n                      <div class='gridCoordinate' value='C1'></div>\n                      <div class='gridCoordinate' value='C2'></div>\n                      <div class='gridCoordinate' value='C3'></div>    \n                      <div class='gridCoordinate' value='C4'></div>    \n                      <div class='gridCoordinate' value='C6'></div>    \n                      <div class='gridCoordinate' value='C7'></div>    \n                      <div class='gridCoordinate' value='C8'></div>    \n                      <div class='gridCoordinate' value='C9'></div>    \n                      <div class='gridCoordinate' value='C10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='D1'></div>\n                      <div class='gridCoordinate' value='D2'></div>\n                      <div class='gridCoordinate' value='D3'></div>    \n                      <div class='gridCoordinate' value='D4'></div>    \n                      <div class='gridCoordinate' value='D6'></div>    \n                      <div class='gridCoordinate' value='D7'></div>    \n                      <div class='gridCoordinate' value='D8'></div>    \n                      <div class='gridCoordinate' value='D9'></div>    \n                      <div class='gridCoordinate' value='D10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='E1'></div>\n                      <div class='gridCoordinate' value='E2'></div>\n                      <div class='gridCoordinate' value='E3'></div>    \n                      <div class='gridCoordinate' value='E4'></div>    \n                      <div class='gridCoordinate' value='E6'></div>    \n                      <div class='gridCoordinate' value='E7'></div>    \n                      <div class='gridCoordinate' value='E8'></div>    \n                      <div class='gridCoordinate' value='E9'></div>    \n                      <div class='gridCoordinate' value='E10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='F1'></div>\n                      <div class='gridCoordinate' value='F2'></div>\n                      <div class='gridCoordinate' value='F3'></div>    \n                      <div class='gridCoordinate' value='F4'></div>    \n                      <div class='gridCoordinate' value='F6'></div>    \n                      <div class='gridCoordinate' value='F7'></div>    \n                      <div class='gridCoordinate' value='F8'></div>    \n                      <div class='gridCoordinate' value='F9'></div>    \n                      <div class='gridCoordinate' value='F10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='G1'></div>\n                      <div class='gridCoordinate' value='G2'></div>\n                      <div class='gridCoordinate' value='G3'></div>    \n                      <div class='gridCoordinate' value='G4'></div>    \n                      <div class='gridCoordinate' value='G6'></div>    \n                      <div class='gridCoordinate' value='G7'></div>    \n                      <div class='gridCoordinate' value='G8'></div>    \n                      <div class='gridCoordinate' value='G9'></div>    \n                      <div class='gridCoordinate' value='G10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='H1'></div>\n                      <div class='gridCoordinate' value='H2'></div>\n                      <div class='gridCoordinate' value='H3'></div>    \n                      <div class='gridCoordinate' value='H4'></div>    \n                      <div class='gridCoordinate' value='H6'></div>    \n                      <div class='gridCoordinate' value='H7'></div>    \n                      <div class='gridCoordinate' value='H8'></div>    \n                      <div class='gridCoordinate' value='H9'></div>    \n                      <div class='gridCoordinate' value='H10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='I1'></div>\n                      <div class='gridCoordinate' value='I2'></div>\n                      <div class='gridCoordinate' value='I3'></div>    \n                      <div class='gridCoordinate' value='I4'></div>    \n                      <div class='gridCoordinate' value='I6'></div>    \n                      <div class='gridCoordinate' value='I7'></div>    \n                      <div class='gridCoordinate' value='I8'></div>    \n                      <div class='gridCoordinate' value='I9'></div>    \n                      <div class='gridCoordinate' value='I10'></div>   \n\n                      \n                      <div class='gridCoordinate' value='J1'></div>\n                      <div class='gridCoordinate' value='J2'></div>\n                      <div class='gridCoordinate' value='J3'></div>    \n                      <div class='gridCoordinate' value='J4'></div>    \n                      <div class='gridCoordinate' value='J6'></div>    \n                      <div class='gridCoordinate' value='J7'></div>    \n                      <div class='gridCoordinate' value='J8'></div>    \n                      <div class='gridCoordinate' value='J9'></div>    \n                      <div class='gridCoordinate' value='J10'></div>   \n\n    "})();const o=[],r=d();o.push(r),r.createCarrier("horizontal","A1"),r.createBattleship("vertical","F1");const s=d();o.push(s),s.createCarrier("vertical","F4"),s.createBattleship("horizontal","B1"),console.log(r.createGameboard(r).placeShips()),console.log(s.createGameboard(s).placeShips()),console.log(s.createGameboard(s).receiveAttack("A1")),console.log((()=>{let i=[];for(const d in r.coordinates)"X"===r.coordinates[d]&&"HIT"===r.coordinates[d]||i.push(d);let d=i[Math.floor(Math.random()*i.length)];return r.createGameboard(r).receiveAttack(d)})()),console.log(r.coordinates)})();