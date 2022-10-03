
function cifrar(frase){
    let abecedario=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let cifrado =  ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    let nueva_frase = frase.split('');
    let palabra = '';
    console.log(nueva_frase);
    for(let i=0; i<nueva_frase.length; i++){
        for(let a=0; a<abecedario.length; a++){
            if(nueva_frase[i] == abecedario[a]){
                palabra = palabra + cifrado[a];
            }
        }
    }
    console.log('\n Texto plano: '+ frase + '\n Texto cifrado: '+ palabra);
 
}


cifrar('hola');