function calculate1() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
 
    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers.");
      return;
    }
 
    document.getElementById('sum1').textContent = a + b;
    document.getElementById('diff1').textContent = a - b;
    document.getElementById('prod1').textContent = a * b;
    document.getElementById('quot1').textContent = b !== 0 ? a / b : "Undefined";
  }
 
  function clear1() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('sum1').textContent = "";
    document.getElementById('diff1').textContent = "";
    document.getElementById('prod1').textContent = "";
    document.getElementById('quot1').textContent = "";
  }