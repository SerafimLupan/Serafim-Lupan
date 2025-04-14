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

// Scroll navbar

var previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
var header = document.getElementById('site-header');
var headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollPosition > previousScrollPosition && currentScrollPosition > headerHeight) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  previousScrollPosition = currentScrollPosition;
});

// Sidebar funcția care arată

function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex'
}

// Sidebar funcția care ascunde

function hidenSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none'
}

// Buton interactiv reseteaza pagina trimitele datele intr-un ducument exel pe drive

var form = document.getElementById('formular');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("formular")),
    }).then(() =>{
        alert("Programarea ta a fost trimisă cu succes!");
        form.reset();
    });
});

// Limitele pentru calendar și inversare lui la format de data-luna-anul

var datePicker = document.getElementById('data-luna-anul');
var today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

// Limitele pentru ceas puate să selecteze de la 8:00 - 22:00

document.addEventListener('DOMContentLoaded', function () {
var timePicker = document.getElementById('timp');
    timePicker.addEventListener('input', function () {
        var selectedTime = timePicker.value;
        // Verifică dacă e corect sau nu, ce a introdus clientul și îl atenționează
        if (selectedTime < '08:00' || selectedTime > '22:00') {
            alert('Te rog să selectezi un timp între 8:00 și 22:00.');
            timePicker.value = '';
        }
    });
});