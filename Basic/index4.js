const a = 5 ; 
const b = 6 ;
const c = 7 ; 

const area = ( a + b + c ) / 2;

const areatriangle = Math.sqrt( area * ( area - a ) * (area - b) * (area - c));

console.log(areatriangle)
