function generateFullName() {
    const first = document.getElementById('first').value.trim();
    const middle = document.getElementById('middle').value.trim();
    const last = document.getElementById('last').value.trim();
 
    document.getElementById('fullname').textContent = `${first} ${middle} ${last}`.replace(/\s+/g, ' ').trim();
  }
 
  function clearEntries() {
    document.getElementById('first').value = "";
    document.getElementById('middle').value = "";
    document.getElementById('last').value = "";
    document.getElementById('fullname').textContent = "";
  }