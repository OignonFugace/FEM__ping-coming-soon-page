const form = document.getElementById('page__form');

const para = document.createElement('p');
para.textContent = 'Please provide a valid email address';
para.style.color = 'red';
para.style.display = 'none';
form.insertBefore(para, form.lastElementChild);


form.addEventListener('submit', function(e) {
    const textInput = document.getElementById('form__user-input');
    const emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    // Tester si userInput est bien de la forme d'un email en utilisant les regex
    if (emailRegex.test(textInput.value)) {
        textInput.style.borderColor = 'inherit';
        console.log(para);
        para.style.display = 'none';
    } else {
        textInput.style.borderColor = 'red';
        console.log(para);
        para.style.display = 'block';
    }
});