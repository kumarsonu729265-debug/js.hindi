const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const new_all_heros = [...marvel_heros,...dc_heros]
console.log(new_all_heros);

console.log(Array.from("sonu"));
console.log(Array.isArray("sonu"));
console.log(Array.from({name : "sonu"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
