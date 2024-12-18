function openModal(imageSrc, title, description) {
    const modal = document.getElementById('recipeModel');
    const modelImage = document.getElementById('ModelImage');
    const recipeTitle = document.getElementById('recipeTitle');
    const recipeDescription = document.getElementById('recipeDescription');

    // Set content
    modelImage.src = imageSrc;
    recipeTitle.textContent = title;
    recipeDescription.textContent = description;

    // Display modal
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('recipeModel');
    modal.style.display = 'none';
}