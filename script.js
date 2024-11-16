const result = document.getElementById("result")
let operator = ""
let num1 
let num2
function append_value(number) {
   // result.value = result.value + number
   result.value += number
}

function append_operator(_operator) {
    operator = _operator
    num1 = result.value
    result.value += operator
}

function find_result() {
   num2 = result.value.slice(num1.length + 1)
   let final_result 
   let x = parseFloat(num1)
   let y = parseFloat(num2)
   switch (operator) {
      case "+":
         final_result = x + y
         break;
      case "-":
         final_result = x - y
         break;
      case "*":
         final_result = x * y
         break;
      case "/":
         final_result = x / y
         break;
      default:
         break;
   }
   result.value = final_result.toFixed(4)
}

function _delete() {
   result.value = ""
}