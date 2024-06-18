function solve() {
  document.getElementById('generateBtn').addEventListener('click', generateFurniture);
  document.getElementById('buyBtn').addEventListener('click', buyFurniture);

  function generateFurniture() {
      const furnitureInput = document.getElementById('furnitureInput').value;
      let furnitureArray;
      try {
          furnitureArray = JSON.parse(furnitureInput);
      } catch (e) {
          alert('Invalid input. Please provide a valid JSON array.');
          return;
      }

      const tableBody = document.getElementById('furnitureTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      furnitureArray.forEach(furniture => {
          const row = document.createElement('tr');

          const imgCell = document.createElement('td');
          const img = document.createElement('img');
          img.src = furniture.img;
          imgCell.appendChild(img);
          row.appendChild(imgCell);

          const nameCell = document.createElement('td');
          nameCell.textContent = furniture.name;
          row.appendChild(nameCell);

          const priceCell = document.createElement('td');
          priceCell.textContent = furniture.price.toFixed(2);
          row.appendChild(priceCell);

          const decFactorCell = document.createElement('td');
          decFactorCell.textContent = furniture.decFactor;
          row.appendChild(decFactorCell);

          const selectCell = document.createElement('td');
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          selectCell.appendChild(checkbox);
          row.appendChild(selectCell);

          tableBody.appendChild(row);
      });
  }

  function buyFurniture() {
      const rows = document.querySelectorAll('#furnitureTable tbody tr');
      let boughtFurniture = [];
      let totalPrice = 0;
      let totalDecFactor = 0;
      let selectedCount = 0;

      rows.forEach(row => {
          const checkbox = row.querySelector('input[type="checkbox"]');
          if (checkbox.checked) {
              const name = row.cells[1].textContent;
              const price = parseFloat(row.cells[2].textContent);
              const decFactor = parseFloat(row.cells[3].textContent);

              boughtFurniture.push(name);
              totalPrice += price;
              totalDecFactor += decFactor;
              selectedCount++;
          }
      });

      const result = document.getElementById('result');
      result.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
      result.value += `Total price: ${totalPrice.toFixed(2)}\n`;
      if (selectedCount > 0) {
          result.value += `Average decoration factor: ${(totalDecFactor / selectedCount).toFixed(2)}`;
      } else {
          result.value += `Average decoration factor: 0`;
      }
  }
}