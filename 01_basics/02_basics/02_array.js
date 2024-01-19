const marval_heros=["ironman","thor","spiderman"]
const dc_heros=["Superman","flash","aquaman"]
marval_heros.push(dc_heros)
//console.log(marval_heros);
//console.log(marval_heros[3][1]);

const allHeros=marval_heros.concat(dc_heros)
console.log(allHeros);
const all_new_heros=[...marval_heros,...dc_heros]
console.log(all_new_heros);