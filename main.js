(() => {
    'use strict';
    var pokedex = document.getElementById('pokedex');
    pokedex.innerHTML="";
    var tmp="";

//TODO: Recorrer arreglo de pokemons
for (var index = 0; index < pokemons.length; index++) {
    var pokemon = pokemons[index];
    var pId = pokemon.id;
    var pName = pokemon.name.english;
    var pHp = pokemon.base.HP;
    var pAtk = pokemon.base.Attack;
    var pDef = pokemon.base.Defense;
    var pSpd = pokemon.base.Speed;
    var pSpAtk = pokemon.base["Sp. Attack"];
    var pSpDef = pokemon.base["Sp. Defense"];
    var pClasses = pokemon.type;
    if (pokemon.type.length > 1) {
        for (var typecount = 0; typecount < pokemon.type.length; typecount++) {
            //console.log(pokemon.type[typecount]);
        }
    } else {
        //console.log(pokemon.type[0]);
    }
    tmp = tmp + createPokeCard(pId,pName,pClasses,pHp,pAtk,pDef,pSpd,pSpAtk,pSpDef);
    //pokedex.append(createPokeCard(pId,pName,pClasses,pHp,pAtk,pDef,pSpd,pSpAtk,pSpDef));
    //console.log(createPokeCard(pId,pName,pClasses,pHp,pAtk,pDef,pSpd,pSpAtk,pSpDef));
    
}
pokedex.innerHTML=tmp;
})(); //IIFE