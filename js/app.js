//IP finder
document.getElementById("logBtn").addEventListener("click", async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();

  const payload = {
    ip: data.ip,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    page: window.location.href
  };

  fetch("URLUL_TĂU_DE_LA_DEPLOY", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
});


// Scroll effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
