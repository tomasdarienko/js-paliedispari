// dichiaro una prompt
let parola = prompt('inserisci una parola per verificare se e palintropa')
const confronta1 = parola.split("").join().toLowerCase();

// apro la funzione
function confronto(){
     // dischiaro una costante che gira la parola
     const con = parola.split("").reverse().join().toLowerCase();
     // restitusco il valore di 'con' con return
    return con;
}
// richiamo la funzione
 let confronta2 = confronto()

// se la parola originale e il risultato della funzione sono uguali la parola e palintropa
 if(confronta1 == confronta2){
     console.log('e palintropa')
     
 }
 else{
     console.log('non e palintropa')
 }



