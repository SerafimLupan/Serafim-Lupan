// Intro animation când dai clic pe refresh sau Pagina: Home
let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)

    })
})

// Side bar

function sidebar() {
    var sidebar = document.querySelector('.sidebar');

    sidebar.classList.toggle('show');
}

// age calculator

function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    // Verification
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

function updateAge() {
    const birthDate = '2009-04-25';
    const age = calculateAge(birthDate);
    document.getElementById('varsta').textContent = age;
}

// update age when the window is loading
window.onload = updateAge;

// Validare formular și resetare pagină
function validateForm() {
    let valid = true;

    // Validare nume
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    if (!/^[A-Z][a-z]*$/.test(name)) {
        nameError.textContent = "The name must start with a capital letter.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validare e-mail
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "The email address is invalid.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validare mesaj
    let message = document.getElementById('message').value;
    let messageError = document.getElementById('messageError');
    if (message.length > 500) {
        messageError.textContent = "The message must not exceed 500 characters.";
        valid = false;
    } else if (!/^[A-Z].*/.test(message)) {
        messageError.textContent = "The message must start with an uppercase letter.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    return valid;
}

// Validare formular și resetare pagină 
var form = document.getElementById('contactForm');
form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateForm()) {
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("contactForm")),
        }).then(() => {
            alert("Thank you for your message!");
            form.reset();
        });
    }
});
