/* 

onMouseOver -----> Soma
onDbClick -----> Subtrair
onMouseOut-----> Dividir
onClick -----> Multiplicar

*/
const form = document.getElementById('form')
  form.addEventListener('submit', e => {
      e.preventDefault()
  })

function evMouse(e) {
  const v1 = parseFloat(document.getElementById("input1").value);
  const v2 = parseFloat(document.getElementById("input2").value);
  var res = document.getElementById("resultado");

    switch (e) {
      case 1:
        res.innerHTML = "A soma é:  " + v1 + v2
        break;
      case 2:
        console.log(v1, v2);
        res.innerHTML = "A subtração é:  " + (v1 - v2) ;
        break;
      case 3:
        res.innerHTML = "A divisão é:  " +  (v1 / v2);
        break;
      case 4:
        res.innerHTML = "A multiplicação é:  " + (v1 * v2);
        break;
      default:
        res.innerHTML = "<p>Operador não encontrado</p>";
    }

}
