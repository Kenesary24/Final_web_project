document.addEventListener('DOMContentLoaded', function () {
    function saveFormData() {
        let formData = {
            name: document.getElementById('name').value,
            secondname: document.getElementById('secondname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            checkbox: document.getElementById('checkbox1').checked
        };

        if (formData.name && formData.email && formData.password) {
            //преобразование объектов в строку JSON(JavaScript Object Notation)
            localStorage.setItem('userData', JSON.stringify(formData));
            alert('Form data saved successfully!');
        } else {
            alert('Please fill in all required fields.');
        }
    }
    
    let signUpForm = document.querySelector('form');
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        saveFormData();
    });    

});

function login() {
    let storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        storedUserData = JSON.parse(storedUserData);

        let enteredUsername = document.getElementById('username').value.toLowerCase();
        let enteredPassword = document.getElementById('password').value;
        let avatarImage = document.getElementById('avatarImage');

       if (storedUserData.checkbox) {
           avatarImage.src = storedUserData.avatarPath || '../Images/avatar.jpg';
       } else {
           avatarImage.src = '../Images/avatar1.jpg'; 
       }

       localStorage.setItem('avatarPath', avatarImage.src);
        //преобразование в нижний регистр и сравнение
        if (enteredUsername === storedUserData.name.toLowerCase() && enteredPassword === storedUserData.password) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('profile').style.display = 'block';
            document.getElementById('user').innerText = enteredUsername;
            localStorage.setItem('profileName',enteredUsername)
        } else {
            alert('Invalid credentials. Please try again.');
        }
    } else {
        alert('No user data found. Please register first.');
    }
}
