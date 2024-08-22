const searchin = document.getElementById("search-input")
const searchbtn = document.getElementById("search-button")

const pokemonname = document.getElementById("pokemon-name")
const pokemonid = document.getElementById("pokemon-id")
const pokemonweight = document.getElementById("weight")
const height = document.getElementById("height")
const poketypes = document.getElementById("types")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialatk = document.getElementById("special-attack")
const specialdef = document.getElementById("special-defense")
const speed = document.getElementById("speed")
const image = document.getElementById("image")

searchbtn.addEventListener("click", () => {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchin.value.toLowerCase()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not get")
            }
            return response.json()
        })
        .then(data => {
            pokemonname.textContent = `Name: ${data.name.toUpperCase()}`
            pokemonid.innerHTML = `Id: ${data.id}`
            pokemonweight.textContent = `Weight: ${data.weight}`
            height.textContent = `Height: ${data.height}`
            image.innerHTML = `<img src="${data.sprites.front_default}" id="sprite" class="image"></img>`
            hp.innerHTML = `HP: ${data.stats[0].base_stat}`;
            attack.innerHTML = `Attack: ${data.stats[1].base_stat}`;
            defense.innerHTML = `Defense: ${data.stats[2].base_stat}`;
            specialatk.innerHTML = `Special Attack: ${data.stats[3].base_stat}`;
            specialdef.innerHTML = `Special Defense: ${data.stats[4].base_stat}`;
            speed.innerHTML = `Speed: ${data.stats[5].base_stat}`;

            poketypes.innerHTML = 'Types: ';
            data.types.forEach(typeInfo => {
                const typeSpan = document.createElement('span');
                typeSpan.className = typeInfo.type.name.toLowerCase();
                typeSpan.textContent = typeInfo.type.name.toUpperCase();
                poketypes.appendChild(typeSpan);
            });
        })
        .catch(error => {
            alert("Pokemon not found")
            console.error(error)
        })
});
