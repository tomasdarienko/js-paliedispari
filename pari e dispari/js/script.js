
// 1 creo due propt 
let valore_utente = prompt('inserisci "pari" o "dispari" ')
let da_a = prompt('inserisci un numero da 1 a 5')

// 2 creo una funzione dove genero un numero casuale da uno a 5 e lo sommo a numero inserito dal utente
function random() {
    let somma = parseInt(da_a) + Math.floor(Math.random() * 5 + 1)
    return somma
}

// 3 trasformo il risultato della funzione in una variabile
let somma =random()
console.log(somma)

// 4 creo una funzione che definisce se la somma dei numeri da un valore pari o dispari
function pari_disp() {
    let pari
    if (somma % 2 == 0) {
        pari = ('pari')
    }
    else {
        pari = ('dispari')
    }
    return pari
}

// 5 trasformo il risultato della funzione in una variabile
let esito = pari_disp()
console.log(esito)

// 6 dichiaro chi ha vinto
// 6.1 se il valore dell utente e pari e l'esito pure l utente vince

if(valore_utente == "pari" && esito == "pari"){
 console.log('vinto')
}

// 6.2 se il valore dell utente e dispari e l'esito pure l utente vince
else if(valore_utente == "dispari" && esito == "dispari"){
    console.log('vinto')}

// altrimneti perde
else{
    console.log('perso')}
