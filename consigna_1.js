
function piramide(numero){
    let espacio = numero;
    for(let i=0; i<=numero; i++){
        console.log(' '.repeat(espacio--) + '#'.repeat(i) + ' ' + '' + '#'.repeat(i));
    }
}

piramide(7);

