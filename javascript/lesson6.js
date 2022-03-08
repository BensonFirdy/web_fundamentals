var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// Using the monster variable above how could we access the name?
// Using the monster variable above how could we access the second type?
// Arrays of objects

console.log(monster.name)
console.log(monster.types[1])

// This is an array of objects

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokemon who have an id greater than 99 we could...

// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].id > 99) {
//         console.log(pokémon[i].name)
//     }
// }


// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].id % 3==0) {
//         console.log(pokémon[i].name)
//     }
// }

// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length > 1) {
//         console.log(pokémon[i].name)
//     }
// }

// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length === 1 && pokémon[i].types[0] === "poison" ) {
//         console.log(pokémon[i].name)
//     }
// }

// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].types == "poison" ) {
//         console.log(pokémon[i].name)
//     }
// }

// for (var i=0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length === 2 && pokémon[i].types[1] === "flying" ) {
//         console.log(pokémon[i].types[0])
//     }
// }

// Here is a good example for difference between == and ===. 
// First, 
console.log(0 == "")

console.log(0 === "")
