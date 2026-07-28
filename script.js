const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');
const diff = document.getElementById('diff');
const product = document.getElementById('product');
const quotient = document.getElementById('quotient');
let result = 0;

function calculate() {
    if(!(num1.value === "" || num2.value === "")) {
        
        sum = parseInt(num1.value) + parseInt(num2.value);
        sum.innerHTML = sum;

        diff = parseInt(num1.value) - parseInt(num2.value);
        diff.innerHTML = diff;

        product = parseInt(num1.value) * parseInt(num2.value);
        product.innerHTML = product;

        quotient = parseInt(num1.value) / parseInt(num2.value);
        quotient.innerHTML = quotient;
    }
}

function clearResult() {
    num1.value = "";
    num2.value = ""
    sum.innerHTML = "";
    diff.innerHTML = "";
    product.innerHTML = "";
    quotient.innerHTML = "";
    result = 0;

}
