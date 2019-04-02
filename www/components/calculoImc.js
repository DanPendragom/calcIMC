// This is a JavaScript file
var altura = 0;
var peso = 0;
var resultado = 0;

$(document).on("click","#resultado",function(){
  altura = $("#altura").val();
  peso = $("#kg").val(); 
  
  if(altura >= 5.0){
    alert ("Informe uma altura válida");
  }
  else{
    resultado = peso/(altura * altura);
    resultado = parseFloat(resultado.toFixed(1))

    if(resultado <=18.5){
      $("#resTitle").val("ABAIXO DO PESO");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("Se espirrar voa!");
    }
    else if(resultado >=18.6 && resultado <=24.9){
      $("#resTitle").val("PESO IDEAL!");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("PARABÉNS!");
    }
    else if(resultado >=25 && resultado <=29.9){
      $("#resTitle").val("ACIMA DO PESO");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("Olha a dieta amigo...");
    }
    else if(resultado >=30 && resultado <=34.9){
      $("#resTitle").val("OBESIDADE (I)");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("Chega de Mc'Donalds né");
    }
    else if(resultado >=35 && resultado <=39.9){
      $("#resTitle").val("OBESIDADE (II)");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("Melhor não visitar mais a vovó");
    }
    else if(resultado >=40){
      $("#resTitle").val("OBESIDADE (III)");
      $("#resInfo").val("O seu IMC é " + resultado);
      alert("Por favor, procure um médico imediatamente");
    }
  }
});
