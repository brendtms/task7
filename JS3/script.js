let numbers = [];

function renderList3() {
  const listDiv = document.getElementById('numberList');
  listDiv.innerHTML = numbers.map(n => `<div>${n}</div>`).join('');

  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);
    document.getElementById('sum3').textContent = sum;
    document.getElementById('highest3').textContent = highest;
    document.getElementById('lowest3').textContent = lowest;
  } else {
    document.getElementById('sum3').textContent = "";
    document.getElementById('highest3').textContent = "";
    document.getElementById('lowest3').textContent = "";
  }
}

function insertNumber() {
    const input = document.getElementById('numEntry');
    const val = parseFloat(input.value);

  if (isNaN(val)) {
    alert("Please enter a valid number.");
    return;
}
    numbers.push(val);
    input.value = "";
    renderList3();
}
function deleteAll() {
    numbers = [];
    renderList3();
}