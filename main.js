// main.js

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultDiv = document.getElementById('result');

  function validatePlate(input) {
    // Accepts e.g. "AGL4907" or "AGL 4907"
    const normalized = input.replace(/\s+/g, '').toUpperCase();
    // Must start with A, 7 chars, 3 letters then 4 numbers
    if (!/^A[A-Z]{2}\d{4}$/.test(normalized)) {
      return { valid: false, normalized };
    }
    return { valid: true, normalized };
  }

  function searchPlate() {
    const raw = searchInput.value.trim();
    const { valid, normalized } = validatePlate(raw);
    if (!raw) {
      resultDiv.textContent = 'Please enter a plate number.';
      resultDiv.className = 'text-danger';
      return;
    }
    if (!valid) {
      resultDiv.textContent = 'Invalid format. Use e.g. AGL4907 or AGL 4907.';
      resultDiv.className = 'text-danger';
      return;
    }
    if (typeof plateNumbers === 'undefined') {
      resultDiv.textContent = 'Plate numbers data not loaded.';
      resultDiv.className = 'text-danger';
      return;
    }
    if (plateNumbers.includes(normalized)) {
      resultDiv.textContent = `Plate number ${normalized} was FOUND!, Sorry`;
      resultDiv.className = 'text-danger';
    } else {
      resultDiv.textContent = `Congrats , Plate number ${normalized} not found. `;
      resultDiv.className = 'text-success';
    }
  }

  searchBtn.addEventListener('click', searchPlate);
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchPlate();
  });
});
