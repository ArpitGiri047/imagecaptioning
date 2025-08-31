
const uploadButton = document.querySelector('.upload-button');
const generateButton = document.querySelector('.generate-button');
const statusText = document.querySelector('p strong + span');
const selectedImageText = document.querySelector('p + p strong + span');
const captionTextarea = document.querySelector('textarea');

// Function for 'Upload Image' button
uploadButton.addEventListener('click', () => {
    const imageName = prompt('Enter the name of your image (e.g., image.jpg):');
    if (imageName) {
        selectedImageText.textContent = imageName;
        statusText.textContent = 'Ready';
        statusText.style.color = 'green';
    } else {
        alert('No file selected!');
    }
});

// Function for 'Generate Caption' button
generateButton.addEventListener('click', () => {
    if (selectedImageText.textContent !== 'No file selected') {
        statusText.textContent = 'Generating...';
        statusText.style.color = 'rgb(182, 68, 42)';
        
        // Simulating a caption generation
        setTimeout(() => {
            captionTextarea.value = 'This is a sample generated caption for your image.';
            statusText.textContent = 'Caption Generated';
            statusText.style.color = 'green';
        }, 2000); // Simulates 2 seconds delay
    } else {
        alert('Please upload an image first!');
    }
});
document.querySelector('.upload-button').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`File "${file.name}" selected.`);
        }
    };
    input.click();
});
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
uploadButton.addEventListener('click', debounce(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`File "${file.name}" selected.`);
        }
    };
    input.click();
}, 300));
generateButton.addEventListener('click', debounce(() => {
    if (selectedImageText.textContent !== 'No file selected') {
        statusText.textContent = 'Generating...';
        statusText.style.color = 'rgb(182, 68, 42)';
        
        
    } else {
        alert('Please upload an image first!');
    }
}, 300));
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function captureFromCamera() {
    const input = document.createElement('input');
    input.accept = 'image/*';
    input.capture = 'environment'; // Opens the back camera if available input.accept = 'image/*';
    input.capture = 'camera';
    input.onchange = previewImage;
    input.click();
}
