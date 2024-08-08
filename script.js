// Galera de Imagenes

const addButton = document.querySelector('.add-image-link button');
const editButton = document.querySelector('.edit-image-link button');
const removeButton = document.querySelector('.remove-image-link button');
const formContainer = document.querySelector('.add-edit-remove-container');
const addImage = document.getElementById('add-image');
const editImage = document.getElementById('edit-image');
const removeImage = document.getElementById('remove-image');
const addButtonClose = document.getElementById('add-close-image-btn');
const editButtonClose = document.getElementById('edit-close-image-btn');
const removeButtonClose = document.getElementById('remove-close-image-btn');
const imageURL = document.getElementById('image-url');
const imageTitle = document.getElementById('image-title');


// Cuando se pulse en añadir imagen, desplegar el formato
addButton.onclick = () => {
    try{
        if(editButton.onclick || removeButton.onclick){
            editImage.style.display = "none"
            removeImage.style.display = "none"
            removeButton.style.color = "black"
            editButton.style.color = "black"
        }
        addButton.style.color = "red"
        addImage.style.display = "flex"
    }
    catch(err){
        console.erro(err)
    }
}

editButton.onclick = () => {
    try{
        if(addButton.onclick || removeButton.onclick){
            addButton.style.color = "black"
            removeButton.style.color = "black"
            addImage.style.display = "none"
            removeImage.style.display = "none"
        }
        editButton.style.color = "red"
        editImage.style.display = "flex";
    }
    catch(err){
        console.error(err)
        return null
    }
}

removeButton.onclick = () => {
    try{
        if(addButton.onclick || editButton.onclick){
            editButton.style.color = "black"
            removeButton.style.color = "black"
            addImage.style.display = "none"
            editImage.style.display = "none"
        }
        removeButton.style.color = "red"
        removeImage.style.display = "flex"
    }
    catch(err){
        console.error(err)
        return null
    }
}

addButtonClose.onclick = () => {
    try{
        addImage.style.display = "none";
        addButton.style.color = "black"
    }
    catch(err){
        console.error(err)
    }
}

editButtonClose.onclick = () => {
    try{
        editImage.style.display = "none"
        editButton.style.color = "black"
    }
    catch(err){

    }
}

removeButtonClose.onclick = () => {
    try{
        removeImage.style.display = "none"
        removeButton.style.color = "black"
    }
    catch(err){

    }
}