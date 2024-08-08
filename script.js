document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('show-add-image-form');
    const editButton = document.getElementById('show-edit-image-form');
    const removeButton = document.getElementById('show-remove-image-form');
    const formContainer = document.querySelector('.add-edit-remove-container');
    const addImage = document.getElementById('add-image');
    const editImage = document.getElementById('edit-image');
    const removeImage = document.getElementById('remove-image');
    const addButtonClose = document.getElementById('add-close-image-btn');
    const editButtonClose = document.getElementById('edit-close-image-btn');
    const removeButtonClose = document.getElementById('remove-close-image-btn');
    const imageURL = document.getElementById('image-url');
    const imageTitle = document.getElementById('image-title');
    const addImageButton = document.getElementById('add-image-btn');

    // Mostrar formulario de añadir imagen
    addButton.onclick = () => {
        addImage.style.display = 'flex';
        editImage.style.display = 'none';
        removeImage.style.display = 'none';
    };

    // Mostrar formulario de editar imagen
    editButton.onclick = () => {
        editImage.style.display = 'flex';
        addImage.style.display = 'none';
        removeImage.style.display = 'none';
    };

    // Mostrar formulario de eliminar imagen
    removeButton.onclick = () => {
        removeImage.style.display = 'flex';
        addImage.style.display = 'none';
        editImage.style.display = 'none';
    };

    // Cerrar formulario de añadir imagen
    addButtonClose.onclick = () => {
        addImage.style.display = 'none';
    };

    // Cerrar formulario de editar imagen
    editButtonClose.onclick = () => {
        editImage.style.display = 'none';
    };

    // Cerrar formulario de eliminar imagen
    removeButtonClose.onclick = () => {
        removeImage.style.display = 'none';
    };

    // Añadir nueva imagen a la galería
    addImageButton.onclick = () => {
        const url = imageURL.value;
        const title = imageTitle.value;

        if (url && title) {
            const gallery = document.querySelector('.gallery');
            const newImageContainer = document.createElement('div');
            newImageContainer.classList.add('image-container');

            const newImage = document.createElement('img');
            newImage.src = url;
            newImage.alt = title;
            newImage.classList.add('image');

            const newTitle = document.createElement('h3');
            newTitle.classList.add('title');
            newTitle.textContent = title;

            const newButtonsContainer = document.createElement('div');
            newButtonsContainer.id = 'image-buttons';

            const newEliminateButton = document.createElement('button');
            newEliminateButton.classList.add('eliminatebtn');
            newEliminateButton.textContent = 'Eliminar';

            const newDetailsButton = document.createElement('button');
            newDetailsButton.classList.add('detailsbtn');
            newDetailsButton.textContent = 'Detalles';

            newButtonsContainer.appendChild(newEliminateButton);
            newButtonsContainer.appendChild(newDetailsButton);

            newImageContainer.appendChild(newImage);
            newImageContainer.appendChild(newTitle);
            newImageContainer.appendChild(newButtonsContainer);

            gallery.appendChild(newImageContainer);

            imageURL.value = '';
            imageTitle.value = '';
            addImage.style.display = 'none';
        }
    };

    // Eliminar imagen de la galería
    document.querySelector('.gallery').addEventListener('click', (event) => {
        if (event.target.classList.contains('eliminatebtn')) {
            const imageContainer = event.target.closest('.image-container');
            imageContainer.remove();
        }
    });

    // Mostrar detalles de la imagen
    document.querySelector('.gallery').addEventListener('click', (event) => {
        if (event.target.classList.contains('detailsbtn')) {
            const imageContainer = event.target.closest('.image-container');
            const image = imageContainer.querySelector('.image').src;
            const title = imageContainer.querySelector('.title').textContent;
            alert(`Título: ${title}\nURL: ${image}`);
        }
    });
});