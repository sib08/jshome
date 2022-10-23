function btn_click() {
  const name = document.getElementById("name");
  const age= document.getElementById("age");
  console.log(name.value)
  console.log(age.value)
const result = document.getElementById("result");
var a = parseInt(age.value) + 1;
var msg = name.value + ' 님은 내년에 '+ a + " 살이 되는군요!";
result.innerText = msg;  
}