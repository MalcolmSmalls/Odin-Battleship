(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};e.d({},{G:()=>i});const o=()=>{let e=[];return{shipList:e,createCarrier:(o,r)=>{const s=t("carrier",o,r);e.push(s)},createBattleship:(o,r)=>{const s=t("battleship",o,r);e.push(s)},createDestroyer:(o,r)=>{const s=t("destroyer",o,r);e.push(s)},createSubmarine:(o,r)=>{const s=t("submarine",o,r);e.push(s)},createPatrolBoat:(o,r)=>{const s=t("patrol boat",o,r);e.push(s)},createGameboard:e=>r(e),coordinates:{A1:0,A2:0,A3:0,A4:0,A5:0,A6:0,A7:0,A8:0,A9:0,A10:0,B1:0,B2:0,B3:0,B4:0,B5:0,B6:0,B7:0,B8:0,B9:0,B10:0,C1:0,C2:0,C3:0,C4:0,C5:0,C6:0,C7:0,C8:0,C9:0,C10:0,D1:0,D2:0,D3:0,D4:0,D5:0,D6:0,D7:0,D8:0,D9:0,D10:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,E10:0,F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0,F10:0,G1:0,G2:0,G3:0,G4:0,G5:0,G6:0,G7:0,G8:0,G9:0,G10:0,H1:0,H2:0,H3:0,H4:0,H5:0,H6:0,H7:0,H8:0,H9:0,H10:0,I1:0,I2:0,I3:0,I4:0,I5:0,I6:0,I7:0,I8:0,I9:0,I10:0,J1:0,J2:0,J3:0,J4:0,J5:0,J6:0,J7:0,J8:0,J9:0,J10:0}}},t=(e,o,t)=>{let r=0;const s=()=>o,i=t,a=()=>{r="carrier"===e?5:"battleship"===e?4:"destroyer"===e||"submarine"===e?3:"patrol boat"===e?2:null};a();let n=r;const c=()=>0===n;return{shipSize:r,getType:()=>e,shipSizeGetter:a,health:n,sunk:c,hit:()=>(n-=1,0===n&&c(),n),shipCoordinates:()=>{let e=[];if("horizontal"===s()){let o=Number(i.substring(1));if(!(o-1+r<=10))return;for(let t=o;t<o+r;t++)e.push(`${i.substring(0,1)}${t}`)}else if("vertical"===s()){let o=["A","B","C","D","E","F","G","H","I","J"],t=Number(i.substring(1)),s=i.substring(0,1),a=o.indexOf(s);if(!(a+r<=10))return;for(let s=a;s<a+r;s++)e.push(`${o[s]}${t}`)}return e},getAlignment:s,start:i}},r=e=>({receiveAttack:o=>{for(const t in e.coordinates)if(t===o){if(0===e.coordinates[t])return e.coordinates[t]="X",console.log(e.coordinates),console.log(e.shipList),"miss";if("object"==typeof e.coordinates[t])e.coordinates[t].hit(),console.log(`${e.coordinates[t]} has been hit!`),!0===e.coordinates[t].sunk()&&(e.shipList.splice(e.shipList.indexOf(e.coordinates[t]),1),console.log(`${e.coordinates[t].getType()} has been sunk!`),console.log(e.shipList),0===e.shipList.length&&console.log("you lose!")),e.coordinates[t]="HIT",console.log(e.coordinates);else if("X"===e.coordinates[t]||"HIT"===e.coordinates[t])return"already tried here!"}},letsTry:()=>{console.log(e.shipList)},placeShips:()=>{e.shipList.forEach((o=>{o.shipCoordinates().forEach((t=>{for(const r in e.coordinates)r===t&&(e.coordinates[r]=o)}))}))}}),s=[],i=o();s.push(i),i.createCarrier("horizontal","A1"),i.createBattleship("vertical","F1");const a=o();s.push(a),a.createCarrier("vertical","F4"),a.createBattleship("horizontal","B1"),console.log(i.createGameboard(i).placeShips()),console.log(a.createGameboard(a).placeShips()),console.log(a.createGameboard(a).receiveAttack("A1")),console.log((()=>{let e=[];for(const o in i.coordinates)"X"===i.coordinates[o]&&"HIT"===i.coordinates[o]||e.push(o);return e})()),console.log(i.coordinates)})();