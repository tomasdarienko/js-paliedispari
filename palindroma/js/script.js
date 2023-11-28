// dichiaro una prompt
let parola = prompt('inserisci una parola per verificare se e palindroma')

// apro la funzione
function confronto() {

    const confronta1 = parola.split("").join().toLowerCase();
    // dischiaro una costante che gira la parola
    const confronta2 = parola.split("").reverse().join().toLowerCase();
    // restitusco il valore di 'con' con return
    
    // se la parola originale e il risultato della funzione sono uguali la parola e palindroma
   if (confronta1 == confronta2) {
      console.log('la parola e palindroma')
    }
    else {
        console.log('la parola non e palindroma')
    }
     return 
}

// richiamo la funzione
let con = confronto()
console.log(con)






