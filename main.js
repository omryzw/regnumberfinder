// main.js

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultDiv = document.getElementById('result');

  function searchPlate() {
    const query = searchInput.value.trim().toUpperCase();
    if (!query) {
      resultDiv.textContent = 'Please enter a plate number.';
      resultDiv.className = 'text-danger';
      return;
    }
    if (typeof plateNumbers === 'undefined') {
      resultDiv.textContent = 'Plate numbers data not loaded.';
      resultDiv.className = 'text-danger';
      return;
    }
    if (plateNumbers.includes(query)) {
      resultDiv.textContent = `Plate number ${query} was FOUND!, Sorry`;
      resultDiv.className = 'text-danger';
    } else {
      resultDiv.textContent = `Congrats , Plate number ${query} not found. `;
      resultDiv.className = 'text-success';
    }
  }

  searchBtn.addEventListener('click', searchPlate);
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchPlate();
  });
});
