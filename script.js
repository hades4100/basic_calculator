function calculate() {
  let num1 = Number(document.getElementById("firstnumber").value);
  let num2 = Number(document.getElementById("secondnumber").value);
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
  document.getElementById("firstnumber").value = "";
  document.getElementById("secondnumber").value = "";
  choice = undefined;
  document.getElementById("result").innerHTML = "";
}

function cal() {
  let num1 = Number(document.getElementById("firstnumber").value);
  let num2 = Number(document.getElementById("secondnumber").value);
  if (isNaN(num1) || isNaN(num2)) {
    alert("not a number");
  } else {
    calculate();
  }
}
