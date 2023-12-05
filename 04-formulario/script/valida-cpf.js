/*document.getElementById("validarButton").
    addEventListener("click", function(){
        
 
        const cpf = document.getElementById("cpfInput").value;
 
        if( validaCPF(cpf) ){
            document.getElementById("Resultado").textContent = "CPF válido"
        }else{
            document.getElementById("Resultado").textContent = "CPF inválido"
        }
 
    })
 
    function validaCPF(vrCPF){


        let soma = 0;
        let peso = 10;

        for( x = 0; x <= 8; x++, peso--){

        soma+= parseInt( vrCPF.charAt(x) ) * peso;
        }

        let digitoX = soma%11
        digitoX = 11 - digitoX;

        if(digitoX > 10){
            digitoX = 0;
        }

        let digitoValido = true;

        if( digitoX !== parseInt(vrCPF.charAt(9))){
            digitoValido = false;
        }

        return digitoValido;

        // return vrCPF.length == 11 & !isNaN(vrCPF);
    }*/



    
    $(document).ready(function(){
		$("#cpf").mask("999.999.999-99");
	});

        document.getElementById("validarButton").
        addEventListener("click", function(){
            
     
            const cpf = document.getElementById("cpfInput").value;
     
            if( validaCPF(cpf) ){
                document.getElementById("Resultado").textContent = "CPF válido"
            }else{
                document.getElementById("Resultado").textContent = "CPF inválido"
            }
     
        })

    

function validaCPF(vrCPF) {


    let soma1 = 0;
    let peso1 = 10;
    let soma2 = 0;
    let peso2 = 11;

    for (x = 0; x <= 8; x++, peso1--) {

        soma1 += parseInt(vrCPF.charAt(x)) * peso1;
    }

    for (y = 0; y <= 9; y++, peso2--) {
        soma2 += parseInt(vrCPF.charAt(y)) * peso2;
    }

    let digitoX = soma1 % 11
    digitoX = 11 - digitoX;

    let digitoY = soma2 % 11
    digitoY = 11 - digitoY;

    if (digitoX > 10) {
        digitoX = 0;
    }

    if (digitoY > 3) {
        digitoY = 0;
    }

    let digitoValido = true;

    if (digitoX !== parseInt(vrCPF.charAt(9))) {
        digitoValido = false;
    }

    if (digitoY !== parseInt(vrCPF.charAt(10))) {
        digitoValido = false;
    }

    return digitoValido;

    // return vrCPF.length == 11 & !isNaN(vrCPF);
}