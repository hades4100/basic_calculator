function calculate() {
  var num1 = Number(document.getElementById("firstnumber").value);
  var num2 = Number(document.getElementById("secondnumber").value);
  let choice = document.getElementById("opertaor").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (choice == "+") {
    document.getElementById("result").innerHTML = num1 + num2;
  }
  if (choice == "-") {
    document.getElementById("result").innerHTML = num1 - num2;
  }
  if (choice == "*") {
    document.getElementById("result").innerHTML = num1 * num2;
  }
  if (choice == "/") {
    document.getElementById("result").innerHTML = num1 / num2;
  }
}

function zero() {
  num1 = undefined;
  num2 = undefined;
  choice = undefined;
  document.getElementById("result").innerHTML = "";
}
