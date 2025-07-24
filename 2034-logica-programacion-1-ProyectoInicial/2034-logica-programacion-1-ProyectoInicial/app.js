//variables 
let numeroSecreto =Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos =3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`!Acertaste, el numero es : ${numeroUsuario} lo hiciste en : ${ intentos} ${intentos ==1 ? "intento": "intentos"}  `);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }

        intentos ++;

        if (intentos>maximosIntentos)
        {
            alert("llegaste al numero maximo de " + maximosIntentos+ " intentos" + " y el numero era :  "+ numeroSecreto);
            break;
        }
    }

}



 