//VARIABILE DI VALORE KILOMETRI INSERITA TRAMITE PROMPT DALL'UTENTE
let distance = prompt('Quanti kilometri devi percorrere?');

const priceKm = 0.21;

distance = distance * priceKm;

//VARIABILE DI VALORE ETA' INSERITA TRAMITE PROMPT DALL'UTENTE
let age = prompt('Quanti anni hai?');

//VARIABILE DI VALORE OTTENUTO IN REALZIONE ALLA AVRIABILE 'AGE'
let discount;

if(age < 18) {
    discount = 0.2;
}
else if (age > 65) {
    discount = 0.4;
}
else {
    discount = 0;
}

//VARIABILE DI VALORE PREZZO-FINITO OTTENUTA 
let ultimate_price = distance - (distance * discount);

//VARIABILE CON DUE DECIMALI MOSTRATA IN VIDEO 
let view_var = ultimate_price.toFixed(2)
console.log(view_var);