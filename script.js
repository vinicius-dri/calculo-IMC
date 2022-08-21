



function calcular() {
    var nome = document.querySelector("#nome").value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value    
    var result = document.querySelector("#result")
    var message = document.querySelector("#msg") 


    if (nome == 0) {
        alert('Digite seu nome!')
    } else if(altura == 0) {
        alert("Digite sua altura!")   
      } else if (peso == 0) {
        alert("Digite seu peso!")
       }
    else {   
    var calculo = (peso/ (altura*altura)) * 10000
        result.innerHTML = (`${calculo.toFixed(2)}`)
    }

    if (calculo < 18.5) {
        message.innerHTML = 'Você está muito abaixo do peso!'
    }  else if( calculo > 25) {
        message.innerHTML = ('Você está acima do peso!')
    } else {
            message.innerHTML = ('Você está com o peso normal!')
        }
    }

// IMC: peso/ (altura)2
// Entre 25,0 e 29,9: Sobrepeso
// Entre 18,5 e 24,9: Normal
// Menor que 18,5: Magreza  

function resetar() {
    document.querySelector("#nome").value = ''
    document.querySelector("#altura").value = ''
    document.querySelector("#peso").value = ''
    document.querySelector("result").value = ''
   
}