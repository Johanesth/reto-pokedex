const pokeIconBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //.png
const pokePicBaseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' //.png

// createPokeCard(1,Bulbasaur,Grass,40,50,20,30,45,60)
function createPokeCard(id,pokemon,classes,hp,atk,def,spd,spAtk,spDef) {

    // Añadimos ceros al ID para llamar la imagen correcta más adelante y listar en el pokemon
    idExt = addZerosToId(id);

    // Generamos una etiqueta por cada tipo del pokemon
    var type = "";
    if (classes.length > 1) { //Si el pokémon pertenece a más de un tipo ... iteramos
        for (var typecount = 0; typecount < classes.length; typecount++) {
            type = type + `<span class='badge tag-${classes[typecount]} float-right p-2 mx-1'>${classes[typecount]}</span>`;
        }
    } else { //Si el pokémon es de solo un tipo, pedimos el unico elemento.
        type = type + `<span class='badge tag-${classes[0]} float-right p-2 mx-1'>${classes[0]}</span>`;
    }

    var html = `
    <div class='col-md-1-12'>
        <div class='card bg-light poke-card m-3'>
            <div class='card-header p-0'>
                <div class='row m-0'>
                    <div class='col-8 my-auto'>
                        <span class='pokemon-name'>${idExt}. ${pokemon}</span>
                    </div>
                    <div class='col-4 cropped'>
                        <img src='${pokeIconBaseUrl}${id}.png' alt='${pokemon}'>
                    </div>
                </div>
            </div>
            <div class='card-body'>
                <div class='row'>
                    <div class='col-12'>
                    ${type}
                    </div>
                </div>
                <img class='pokepicture' src='${pokePicBaseUrl}${idExt}.png' alt='${pokemon}'>
            </div>
            <div class='card-footer text-muted p-0'>
                <div class='row m-0'>
                    <div class='col-4 border-right text-center'>
                        <span class='hp-tag-title'>HP:</span>
                        <span class='hp-tag-value'>${hp}</span>
                    </div>
                    <div class='col-4 border-right text-center'>
                        <span class='atk-tag-title'>ATK:</span>
                        <span class='atk-tag-value'>${atk}</span>
                    </div>
                    <div class='col-4 border-right text-center'>
                        <span class='def-tag-title'>DEF:</span>
                        <span class='def-tag-value'>${def}</span>
                    </div>
                    <div class='col-4 border-right border-top text-center'>
                        <span class='spd-tag-title'>SPD:</span>
                        <span class='spd-tag-value'>${spd}</span>
                    </div>
                    <div class='col-4 border-right border-top text-center'>
                        <span class='spatk-tag-title'>SP ATK:</span>
                        <span class='spatk-tag-value'>${spAtk}</span>
                    </div>
                    <div class='col-4 border-right border-top text-center'>
                        <span class='spdef-tag-title'>SP DEF:</span>
                        <span class='spdef-tag-value'>${spDef}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
return html;
}