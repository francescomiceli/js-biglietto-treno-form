console.log("ok js")

const inputName = document.getElementById("name");
console.log(inputName.value);

const distanza = document.getElementById("km");
const age = document.getElementById("age");

const datiUtente = document.getElementById("dati_utente");
const percorrenza = document.getElementById('percorrenza');
const anni = document.getElementById('anni');
const prezzo = document.getElementById('prezzo');



const inviodati = document.getElementById("button");

inviodati.addEventListener('click', function() {
    datiUtente.innerHTML = inputName.value;
    percorrenza.innerHTML = distanza.value;
    anni.innerHTML = age.value;
    
    const prezzoFinale = 0.21 * distanza.value;

    if(age.value < 18){
        prezzo.innerHTML = prezzoFinale * 0.20;
    }
    else if(age.value >= 65){
        prezzo.innerHTML = prezzoFinale * 0.40;

    }
    else{
        prezzo.innerHTML = prezzoFinale;
    }
}
) 

