let marvelhero = ["THor","Ironman","Captain America"]
let dc_hero = ["Batman","Superman","Flash"]
let myhero = marvelhero.concat(dc_hero)
//console.log(myhero);
const allnewhero = [...marvelhero,...dc_hero]
//console.log(allnewhero);

const another_arr = [1,2,34,[22,22,33,44],334,4,2,1,3,[33,32,43,[22,2,3,2,3,23]]]
const newanother_arr = another_arr.flat(Infinity)
//console.log(newanother_arr);
console.log(Array.isArray("RIshi"));
console.log(Array.from("Rishi"));
console.log(Array.from({name:"Rishi"}));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))






