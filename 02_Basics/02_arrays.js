const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const new_all_heros = [...marvel_heros,...dc_heros]
console.log(new_all_heros);

