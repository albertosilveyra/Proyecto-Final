fetch('api.json')
    .then(response => response.json())
    .then(data => displayEquipment(data))
    .catch(error => console.error('Error:', error));

function displayEquipment(equipmentData) {
    const equipmentList = document.getElementById('equipment-list');

    equipmentData.forEach(equipment => {
        const equipmentDiv = document.createElement('div');
        equipmentDiv.className = 'equipment';

        const equipmentImage = document.createElement('img');
        equipmentImage.src = equipment.image;
        equipmentDiv.appendChild(equipmentImage);

        const equipmentDetailsDiv = document.createElement('div');
        equipmentDetailsDiv.className = 'equipment-details';

        const equipmentName = document.createElement('div');
        equipmentName.className = 'equipment-name';
        equipmentName.textContent = equipment.name;
        equipmentDetailsDiv.appendChild(equipmentName);

        const equipmentBrand = document.createElement('div');
        equipmentBrand.className = 'equipment-brand';
        equipmentBrand.textContent = 'Brand: ' + equipment.brand;
        equipmentDetailsDiv.appendChild(equipmentBrand);

        const equipmentPrice = document.createElement('div');
        equipmentPrice.className = 'equipment-price';
        equipmentPrice.textContent = 'Price: ' + equipment.price;
        equipmentDetailsDiv.appendChild(equipmentPrice);

        const equipmentDescription = document.createElement('div');
        equipmentDescription.className = 'equipment-description';
        equipmentDescription.textContent = equipment.description;
        equipmentDetailsDiv.appendChild(equipmentDescription);

        equipmentDiv.appendChild(equipmentDetailsDiv);
        equipmentList.appendChild(equipmentDiv);
    });
}