(()=>{"use strict";var e={d:(i,a)=>{for(var d in a)e.o(a,d)&&!e.o(i,d)&&Object.defineProperty(i,d,{enumerable:!0,get:a[d]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i)};e.d({},{G:()=>n,r:()=>r});const i=()=>{let e=[];return{shipList:e,createCarrier:(i,d)=>{const n=a("carrier",i,d);e.push(n)},createBattleship:(i,d)=>{const n=a("battleship",i,d);e.push(n)},createDestroyer:(i,d)=>{const n=a("destroyer",i,d);e.push(n)},createSubmarine:(i,d)=>{const n=a("submarine",i,d);e.push(n)},createPatrolBoat:(i,d)=>{const n=a("patrol boat",i,d);e.push(n)},createGameboard:e=>d(e),coordinates:{A1:0,A2:0,A3:0,A4:0,A5:0,A6:0,A7:0,A8:0,A9:0,A10:0,B1:0,B2:0,B3:0,B4:0,B5:0,B6:0,B7:0,B8:0,B9:0,B10:0,C1:0,C2:0,C3:0,C4:0,C5:0,C6:0,C7:0,C8:0,C9:0,C10:0,D1:0,D2:0,D3:0,D4:0,D5:0,D6:0,D7:0,D8:0,D9:0,D10:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,E10:0,F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0,F10:0,G1:0,G2:0,G3:0,G4:0,G5:0,G6:0,G7:0,G8:0,G9:0,G10:0,H1:0,H2:0,H3:0,H4:0,H5:0,H6:0,H7:0,H8:0,H9:0,H10:0,I1:0,I2:0,I3:0,I4:0,I5:0,I6:0,I7:0,I8:0,I9:0,I10:0,J1:0,J2:0,J3:0,J4:0,J5:0,J6:0,J7:0,J8:0,J9:0,J10:0}}},a=(e,i,a)=>{let d=0;const n=()=>i,r=a,l=()=>{d="carrier"===e?5:"battleship"===e?4:"destroyer"===e||"submarine"===e?3:"patrol boat"===e?2:null};l();let s=d;const t=()=>0===s;return{shipSize:d,getType:()=>e,shipSizeGetter:l,health:s,sunk:t,hit:()=>(s-=1,0===s&&t(),s),shipCoordinates:()=>{let e=[];if("horizontal"===n()){let i=Number(r.substring(1));if(i-1+d<=10)for(let a=i;a<i+d;a++)e.push(`${r.substring(0,1)}${a}`)}else if("vertical"===n()){let i=["A","B","C","D","E","F","G","H","I","J"],a=Number(r.substring(1)),n=r.substring(0,1),l=i.indexOf(n);if(l+d<=10)for(let n=l;n<l+d;n++)e.push(`${i[n]}${a}`)}return e},getAlignment:n,start:r}},d=e=>({receiveAttack:i=>{for(const a in e.coordinates)if(a===i){if(0===e.coordinates[a])return e.coordinates[a]="X",!1;if("object"==typeof e.coordinates[a])return e.coordinates[a].hit(),!0===e.coordinates[a].sunk()&&(e.shipList.splice(e.shipList.indexOf(e.coordinates[a]),1),console.log(`${e.coordinates[a].getType()} has been sunk!`),0===e.shipList.length&&console.log("you lose!")),e.coordinates[a]="HIT",!0;if("X"===e.coordinates[a]||"HIT"===e.coordinates[a])return}},placeShips:()=>{e.shipList.forEach((i=>{i.shipCoordinates().forEach((a=>{for(const d in e.coordinates)d===a&&(e.coordinates[d]=i)}))}))}});(()=>{const e=document.querySelector("#content");let i="horizontal";e.innerHTML="";const a=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("button"),s=document.createElement("button"),t=document.createElement("button"),o=document.createElement("div"),v=document.createElement("button"),c=document.createElement("div");c.className="startGame";const u=document.createElement("div");u.className="title";const C=document.createElement("div");C.className="game",e.appendChild(C),v.textContent="Start Game",v.className="start_btn",o.className="div_btn",l.textContent="Vertical",s.textContent="Horizontal",t.textContent="Undo",e.appendChild(u),u.appendChild(d),d.textContent="Place Your Carrier",e.appendChild(o),o.appendChild(l),o.appendChild(s),o.appendChild(t),e.appendChild(a),a.className="grid",a.innerHTML="<div class='gridCoordinate player' value='A1'></div>\n                      <div class='gridCoordinate player' value='A2'></div>\n                      <div class='gridCoordinate player' value='A3'></div>    \n                      <div class='gridCoordinate player' value='A4'></div> \n                      <div class='gridCoordinate player' value='A5'></div>    \n                      <div class='gridCoordinate player' value='A6'></div>    \n                      <div class='gridCoordinate player' value='A7'></div>    \n                      <div class='gridCoordinate player' value='A8'></div>    \n                      <div class='gridCoordinate player' value='A9'></div>    \n                      <div class='gridCoordinate player' value='A10'></div>    \n\n                      <div class='gridCoordinate player' value='B1'></div>\n                      <div class='gridCoordinate player' value='B2'></div>\n                      <div class='gridCoordinate player' value='B3'></div>    \n                      <div class='gridCoordinate player' value='B4'></div>    \n                      <div class='gridCoordinate player' value='B5'></div> \n                      <div class='gridCoordinate player' value='B6'></div>    \n                      <div class='gridCoordinate player' value='B7'></div>    \n                      <div class='gridCoordinate player' value='B8'></div>    \n                      <div class='gridCoordinate player' value='B9'></div>    \n                      <div class='gridCoordinate player' value='B10'></div>    \n\n                      \n                      <div class='gridCoordinate player' value='C1'></div>\n                      <div class='gridCoordinate player' value='C2'></div>\n                      <div class='gridCoordinate player' value='C3'></div>    \n                      <div class='gridCoordinate player' value='C4'></div> \n                      <div class='gridCoordinate player' value='C5'></div>   \n                      <div class='gridCoordinate player' value='C6'></div>    \n                      <div class='gridCoordinate player' value='C7'></div>    \n                      <div class='gridCoordinate player' value='C8'></div>    \n                      <div class='gridCoordinate player' value='C9'></div>    \n                      <div class='gridCoordinate player' value='C10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='D1'></div>\n                      <div class='gridCoordinate player' value='D2'></div>\n                      <div class='gridCoordinate player' value='D3'></div>    \n                      <div class='gridCoordinate player' value='D4'></div>    \n                      <div class='gridCoordinate player' value='D5'></div> \n                      <div class='gridCoordinate player' value='D6'></div>    \n                      <div class='gridCoordinate player' value='D7'></div>    \n                      <div class='gridCoordinate player' value='D8'></div>    \n                      <div class='gridCoordinate player' value='D9'></div>    \n                      <div class='gridCoordinate player' value='D10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='E1'></div>\n                      <div class='gridCoordinate player' value='E2'></div>\n                      <div class='gridCoordinate player' value='E3'></div>    \n                      <div class='gridCoordinate player' value='E4'></div>  \n                      <div class='gridCoordinate player' value='E5'></div>  \n                      <div class='gridCoordinate player' value='E6'></div>    \n                      <div class='gridCoordinate player' value='E7'></div>    \n                      <div class='gridCoordinate player' value='E8'></div>    \n                      <div class='gridCoordinate player' value='E9'></div>    \n                      <div class='gridCoordinate player' value='E10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='F1'></div>\n                      <div class='gridCoordinate player' value='F2'></div>\n                      <div class='gridCoordinate player' value='F3'></div>    \n                      <div class='gridCoordinate player' value='F4'></div>   \n                      <div class='gridCoordinate player' value='F5'></div>  \n                      <div class='gridCoordinate player' value='F6'></div>    \n                      <div class='gridCoordinate player' value='F7'></div>    \n                      <div class='gridCoordinate player' value='F8'></div>    \n                      <div class='gridCoordinate player' value='F9'></div>    \n                      <div class='gridCoordinate player' value='F10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='G1'></div>\n                      <div class='gridCoordinate player' value='G2'></div>\n                      <div class='gridCoordinate player' value='G3'></div>    \n                      <div class='gridCoordinate player' value='G4'></div> \n                      <div class='gridCoordinate player' value='G5'></div>   \n                      <div class='gridCoordinate player' value='G6'></div>    \n                      <div class='gridCoordinate player' value='G7'></div>    \n                      <div class='gridCoordinate player' value='G8'></div>    \n                      <div class='gridCoordinate player' value='G9'></div>    \n                      <div class='gridCoordinate player' value='G10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='H1'></div>\n                      <div class='gridCoordinate player' value='H2'></div>\n                      <div class='gridCoordinate player' value='H3'></div>    \n                      <div class='gridCoordinate player' value='H4'></div>    \n                      <div class='gridCoordinate player' value='H5'></div>\n                      <div class='gridCoordinate player' value='H6'></div>    \n                      <div class='gridCoordinate player' value='H7'></div>    \n                      <div class='gridCoordinate player' value='H8'></div>    \n                      <div class='gridCoordinate player' value='H9'></div>    \n                      <div class='gridCoordinate player' value='H10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='I1'></div>\n                      <div class='gridCoordinate player' value='I2'></div>\n                      <div class='gridCoordinate player' value='I3'></div>    \n                      <div class='gridCoordinate player' value='I4'></div>   \n                      <div class='gridCoordinate player' value='I5'></div> \n                      <div class='gridCoordinate player' value='I6'></div>    \n                      <div class='gridCoordinate player' value='I7'></div>    \n                      <div class='gridCoordinate player' value='I8'></div>    \n                      <div class='gridCoordinate player' value='I9'></div>    \n                      <div class='gridCoordinate player' value='I10'></div>   \n\n                      \n                      <div class='gridCoordinate player' value='J1'></div>\n                      <div class='gridCoordinate player' value='J2'></div>\n                      <div class='gridCoordinate player' value='J3'></div>    \n                      <div class='gridCoordinate player' value='J4'></div>   \n                      <div class='gridCoordinate player' value='J5'></div>  \n                      <div class='gridCoordinate player' value='J6'></div>    \n                      <div class='gridCoordinate player' value='J7'></div>    \n                      <div class='gridCoordinate player' value='J8'></div>    \n                      <div class='gridCoordinate player' value='J9'></div>    \n                      <div class='gridCoordinate player' value='J10'></div>   \n\n    ";const g=()=>{(()=>{let e=[];for(const i in n.coordinates)"X"===n.coordinates[i]&&"HIT"===n.coordinates[i]||e.push(i);let i=e[Math.floor(Math.random()*e.length)];n.createGameboard(n).receiveAttack(i)})();for(const e in n.coordinates)m.forEach((i=>{i.attributes[1].value===e&&("X"===n.coordinates[e]?i.classList.add("miss"):"HIT"===n.coordinates[e]&&i.classList.add("hit"))}))},p=e=>{r.createGameboard(r).receiveAttack(e.target.attributes.value.value);for(const i in r.coordinates)i===e.target.attributes.value.value&&("X"===r.coordinates[i]?(e.target.classList.add("miss"),g()):"HIT"===r.coordinates[i]&&(e.target.classList.add("hit"),g()))};e.appendChild(c),document.querySelector(".startGame");const y=e=>{if(0===n.shipList.length){n.createCarrier(i,e.target.attributes.value.value);let a=n.shipList[0].shipCoordinates();d.textContent="Place Your Battleship",console.log(n.shipList[0]),a.forEach((e=>{m.forEach(((i,a)=>{i.attributes[1].value===e&&i.classList.add("ship")}))})),0===n.shipList[0].shipCoordinates().length&&(n.shipList.pop(),d.textContent="Place Your Carrier")}else if(1===n.shipList.length){n.createBattleship(i,e.target.attributes.value.value);let a=n.shipList[1].shipCoordinates();d.textContent="Place Your Destroyer",a.forEach((e=>{m.forEach((i=>{i.attributes[1].value===e&&i.classList.toggle("ship")}))})),0===n.shipList[1].shipCoordinates().length&&(n.shipList.pop(),d.textContent="Place Your Battleship")}else if(2===n.shipList.length){n.createDestroyer(i,e.target.attributes.value.value);let a=n.shipList[2].shipCoordinates();d.textContent="Place Your Submarine",a.forEach((e=>{m.forEach((i=>{i.attributes[1].value===e&&i.classList.toggle("ship")}))})),0===n.shipList[2].shipCoordinates().length&&(n.shipList.pop(),d.textContent="Place Your Destroyer")}else if(3===n.shipList.length){n.createSubmarine(i,e.target.attributes.value.value);let a=n.shipList[3].shipCoordinates();d.textContent="Place Your Patrol Boat",a.forEach((e=>{m.forEach((i=>{i.attributes[1].value===e&&i.classList.toggle("ship")}))})),0===n.shipList[3].shipCoordinates().length&&(n.shipList.pop(),d.textContent="Place Your Submarine")}else if(4===n.shipList.length){n.createPatrolBoat(i,e.target.attributes.value.value);let a=n.shipList[4].shipCoordinates();d.textContent="Click Start Game! ",c.appendChild(v),v.addEventListener("click",(()=>{n.createGameboard(n).placeShips(),d.textContent="ATTACK ENEMY'S BOARD !";let e=document.createElement("div");C.appendChild(e),e.className="grid",document.querySelectorAll("button").forEach((e=>{e.classList.add("hidden")})),e.innerHTML="<div class='gridCoordinate enemy' value='A1'></div>\n                                  <div class='gridCoordinate enemy' value='A2'></div>\n                                  <div class='gridCoordinate enemy' value='A3'></div>    \n                                  <div class='gridCoordinate enemy enemy' value='A4'></div> \n                                  <div class='gridCoordinate enemy' value='A5'></div>    \n                                  <div class='gridCoordinate enemy' value='A6'></div>    \n                                  <div class='gridCoordinate enemy' value='A7'></div>    \n                                  <div class='gridCoordinate enemy' value='A8'></div>    \n                                  <div class='gridCoordinate enemy' value='A9'></div>    \n                                  <div class='gridCoordinate enemy' value='A10'></div>    \n            \n                                  <div class='gridCoordinate enemy' value='B1'></div>\n                                  <div class='gridCoordinate enemy' value='B2'></div>\n                                  <div class='gridCoordinate enemy' value='B3'></div>    \n                                  <div class='gridCoordinate enemy' value='B4'></div>    \n                                  <div class='gridCoordinate enemy' value='B5'></div> \n                                  <div class='gridCoordinate enemy' value='B6'></div>    \n                                  <div class='gridCoordinate enemy' value='B7'></div>    \n                                  <div class='gridCoordinate enemy' value='B8'></div>    \n                                  <div class='gridCoordinate enemy' value='B9'></div>    \n                                  <div class='gridCoordinate enemy' value='B10'></div>    \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='C1'></div>\n                                  <div class='gridCoordinate enemy' value='C2'></div>\n                                  <div class='gridCoordinate enemy' value='C3'></div>    \n                                  <div class='gridCoordinate enemy' value='C4'></div> \n                                  <div class='gridCoordinate enemy' value='C5'></div>   \n                                  <div class='gridCoordinate enemy' value='C6'></div>    \n                                  <div class='gridCoordinate enemy' value='C7'></div>    \n                                  <div class='gridCoordinate enemy' value='C8'></div>    \n                                  <div class='gridCoordinate enemy' value='C9'></div>    \n                                  <div class='gridCoordinate enemy' value='C10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='D1'></div>\n                                  <div class='gridCoordinate enemy' value='D2'></div>\n                                  <div class='gridCoordinate enemy' value='D3'></div>    \n                                  <div class='gridCoordinate enemy' value='D4'></div>    \n                                  <div class='gridCoordinate enemy' value='D5'></div> \n                                  <div class='gridCoordinate enemy' value='D6'></div>    \n                                  <div class='gridCoordinate enemy' value='D7'></div>    \n                                  <div class='gridCoordinate enemy' value='D8'></div>    \n                                  <div class='gridCoordinate enemy' value='D9'></div>    \n                                  <div class='gridCoordinate enemy' value='D10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='E1'></div>\n                                  <div class='gridCoordinate enemy' value='E2'></div>\n                                  <div class='gridCoordinate enemy' value='E3'></div>    \n                                  <div class='gridCoordinate enemy' value='E4'></div>  \n                                  <div class='gridCoordinate enemy' value='E5'></div>  \n                                  <div class='gridCoordinate enemy' value='E6'></div>    \n                                  <div class='gridCoordinate enemy' value='E7'></div>    \n                                  <div class='gridCoordinate enemy' value='E8'></div>    \n                                  <div class='gridCoordinate enemy' value='E9'></div>    \n                                  <div class='gridCoordinate enemy' value='E10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='F1'></div>\n                                  <div class='gridCoordinate enemy' value='F2'></div>\n                                  <div class='gridCoordinate enemy' value='F3'></div>    \n                                  <div class='gridCoordinate enemy' value='F4'></div>   \n                                  <div class='gridCoordinate enemy' value='F5'></div>  \n                                  <div class='gridCoordinate enemy' value='F6'></div>    \n                                  <div class='gridCoordinate enemy' value='F7'></div>    \n                                  <div class='gridCoordinate enemy' value='F8'></div>    \n                                  <div class='gridCoordinate enemy' value='F9'></div>    \n                                  <div class='gridCoordinate enemy' value='F10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='G1'></div>\n                                  <div class='gridCoordinate enemy' value='G2'></div>\n                                  <div class='gridCoordinate enemy' value='G3'></div>    \n                                  <div class='gridCoordinate enemy' value='G4'></div> \n                                  <div class='gridCoordinate enemy' value='G5'></div>   \n                                  <div class='gridCoordinate enemy' value='G6'></div>    \n                                  <div class='gridCoordinate enemy' value='G7'></div>    \n                                  <div class='gridCoordinate enemy' value='G8'></div>    \n                                  <div class='gridCoordinate enemy' value='G9'></div>    \n                                  <div class='gridCoordinate enemy' value='G10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='H1'></div>\n                                  <div class='gridCoordinate enemy' value='H2'></div>\n                                  <div class='gridCoordinate enemy' value='H3'></div>    \n                                  <div class='gridCoordinate enemy' value='H4'></div>    \n                                  <div class='gridCoordinate enemy' value='H5'></div>\n                                  <div class='gridCoordinate enemy' value='H6'></div>    \n                                  <div class='gridCoordinate enemy' value='H7'></div>    \n                                  <div class='gridCoordinate enemy' value='H8'></div>    \n                                  <div class='gridCoordinate enemy' value='H9'></div>    \n                                  <div class='gridCoordinate enemy' value='H10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='I1'></div>\n                                  <div class='gridCoordinate enemy' value='I2'></div>\n                                  <div class='gridCoordinate enemy' value='I3'></div>    \n                                  <div class='gridCoordinate enemy' value='I4'></div>   \n                                  <div class='gridCoordinate enemy' value='I5'></div> \n                                  <div class='gridCoordinate enemy' value='I6'></div>    \n                                  <div class='gridCoordinate enemy' value='I7'></div>    \n                                  <div class='gridCoordinate enemy' value='I8'></div>    \n                                  <div class='gridCoordinate enemy' value='I9'></div>    \n                                  <div class='gridCoordinate enemy' value='I10'></div>   \n            \n                                  \n                                  <div class='gridCoordinate enemy' value='J1'></div>\n                                  <div class='gridCoordinate enemy' value='J2'></div>\n                                  <div class='gridCoordinate enemy' value='J3'></div>    \n                                  <div class='gridCoordinate enemy' value='J4'></div>   \n                                  <div class='gridCoordinate enemy' value='J5'></div>  \n                                  <div class='gridCoordinate enemy' value='J6'></div>    \n                                  <div class='gridCoordinate enemy' value='J7'></div>    \n                                  <div class='gridCoordinate enemy' value='J8'></div>    \n                                  <div class='gridCoordinate enemy' value='J9'></div>    \n                                  <div class='gridCoordinate enemy' value='J10'></div>   \n            \n                ",document.querySelectorAll(".enemy").forEach((e=>{e.addEventListener("click",p)}))})),a.forEach((e=>{m.forEach((i=>{i.attributes[1].value===e&&i.classList.toggle("ship")}))})),0===n.shipList[4].shipCoordinates().length&&(n.shipList.pop(),d.textContent="Place Your Patrol Boat")}},m=document.querySelectorAll(".player");m.forEach((e=>{e.addEventListener("click",y)})),l.addEventListener("click",(()=>{i="vertical"})),s.addEventListener("click",(()=>{i="horizontal"})),t.addEventListener("click",(()=>{if(0!==n.shipList.length){let e=n.shipList[n.shipList.length-1].shipCoordinates(),i=n.shipList[n.shipList.length-1].getType(),a=i[0].toUpperCase()+i.substring(1);d.textContent=`Place Your ${a}`,e.forEach((e=>{m.forEach((i=>{i.attributes[1].value===e&&i.classList.remove("ship")}))})),n.shipList.pop()}}))})();const n=i(),r=i();r.createCarrier("vertical","F4"),r.createBattleship("horizontal","B1"),r.createSubmarine("horizontal","A1"),r.createGameboard(r).placeShips()})();