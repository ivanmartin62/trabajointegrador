var num = document.getElementById('Cantidad_text').value;
console.log(num);

var menu= document.getElementById('floatingSelectGrid').value;
console.log(menu);


let boton= document.getElementById('Resumen');
boton.onclick= resumen_de_la_compra;
function resumen_de_la_compra(){
  if(menu=="Estudiante"){
    var num1= "40";
        var res= num*num1;
        document.getElementById('monto_total').innerHTML="Total a pagar: $ "+ res;
  }else if(menu== "Trainee"){
    var res= num*"100";
    document.getElementById('monto_total').innerHTML="Total a pagar: $ "+ res;
  }else if(menu=="Junior"){
    var res= num*"170";
    document.getElementById('monto_total').innerHTML="Total a pagar: $ "+ res;
  }
}

let eliminar= document.getElementById('Borrar');
eliminar.onclick= resetear;
function resetear(){
  num.value="";
  document.getElementById('monto_total').innerHTML= "Total a pagar: $ ";
}

