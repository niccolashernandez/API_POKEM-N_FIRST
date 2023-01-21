

const app = document.querySelector('#app')
const name_pokemon = document.querySelector('.name_pokemon')
const btnBack = document.querySelector('.btn_back')
const btnNext = document.querySelector('.btn_next')
let pokemon = 1;

const getPokemon = async() =>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await response.json()

    const img = data.sprites.other.dream_world.front_default;
    app.style.backgroundImage = `url(${img})`
    app.style.beff
    name_pokemon.innerHTML = data.name

}

btnNext.addEventListener('click', ()=>{

    if(pokemon <1008){
        pokemon = pokemon + 1

        getPokemon()
    }else{
        alert('Lo sentimos, ya no hay más para mostrar')
    }
    
})

btnBack.addEventListener('click', ()=>{
    if(pokemon >1){
        pokemon = pokemon - 1

        getPokemon()
    }else{
        alert('Lo sentimos, ya no hay más para mostrar')
    }
})

getPokemon()
