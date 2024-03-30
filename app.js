alert ("Eai! suave mano ? bem vindo ao jogo!");
let NumeroMaximo = 5000;
let NumeroSecreto = parseInt(Math.random () *NumeroMaximo + 1);
console.log(NumeroSecreto);
let chute 
let tentativas = 1

//enquanto o chute não for igual ao número secreto
while (chute != NumeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${NumeroMaximo}`);
// se o chute for igual ao número secreto 
    if (chute == NumeroSecreto) {
         break;
    }  else {
        if (chute > NumeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
      } else {
            alert  (`O número secreto é maior que ${chute} `);
      }
      //tentativas = tentativas +1;
      tentativas++;
    }
}

//operador ternário outro exemplo de if e else 
let PalavraTentativa = tentativas > 1 ?  "tentativas" : "tentativa"
alert (`Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${tentativas} ${PalavraTentativa}`);

//if (tentativas > 1) {
   // alert (`Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${tentativas} tentativas`);
//} else {
  //  alert (`Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${tentativas} tentativa`)
//


