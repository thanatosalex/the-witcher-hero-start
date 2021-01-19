//import { magic, weapons, gem, character, stateHero } from "./data.js";
import { character, stateHero } from "./data.js";

// Refrescar lista de 
print();

const characterBtns = document.getElementsByClassName("btn-character");

// llamos al elemento del html
for (let elem of characterBtns) {
    elem.addEventListener("click", function () {
        for (let elemAux of characterBtns) {
            elemAux.classList.remove("btn-character-on");
        }
        elem.classList.add("btn-character-on");
        updateCharacter(this.id)
    });
}

// haremos un evento para cuando hagamos click 
const form = document.getElementsByName("hero-options")[0];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitForm();
});

function updateCharacter(characterId) {
    stateHero.name = characterId;
    stateHero.fullName = character[characterId];
    document.getElementById("hero-img").src = "./img/hero-" + characterId + ".png";
}

function submitForm() {

    // Comprobar si que solo sea maximo 2 gemas
    let error = errorForm();
    // Añade un nuevo objecto cliente al array de datos
    if (error) {
        alert(error);
        return;
    }

    // aqui añadiremos las magias y se removera 

    stateHero.clear();


    //Compruebe si una casilla de verificación está marcada
    // Selecciona tots els elements que es trobi amb la classe (class="noticia")
    let checkboxes = document.querySelectorAll('input[class=checkMagia]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
        stateHero.aMagic.push(checkboxes[i].name);
    }

    checkboxes = document.querySelectorAll('input[class=checkArma]:checked')
    
    for (let i = 0; i < checkboxes.length; i++) {
        stateHero.aWeapons.push(checkboxes[i].name);
    }

    checkboxes = document.querySelectorAll('input[class=checkGema]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
        stateHero.aGem.push(checkboxes[i].name);
    }

    // Refrescar lista 
    print();
}

// esta funcion que salga una alerta que no salga mas de 2 gemas, cuando elije mas de 2 saldra una alerta de un error
function errorForm() {
    let checkboxes = document.querySelectorAll('input[class=checkGema]:checked')
    if (checkboxes.length > 2) {
        return 'Solo puedes elegir 2 gemas.'
    }

    return false;
}

// lo hara el print es añadir el item y removerlo cuando lo deje de usar
function print() {

    // Elimina los argumentos pasados, si están presentes.
    
    let itemImgs = document.getElementsByClassName('box-item');
    for (let itemImg of itemImgs) {
        itemImg.classList.remove('item-on');
    }

    for (let item of stateHero.getItems()) {
        document.getElementById(item).classList.add('item-on');
    }

    document.getElementById('points-attack').innerHTML = stateHero.calculateAttack();
    document.getElementById('points-defense').innerHTML = stateHero.calculateDefense();
}