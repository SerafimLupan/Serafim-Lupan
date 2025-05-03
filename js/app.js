//IP finder
document.getElementById("logBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    const payload = {
      ip: data.ip,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      page: window.location.href
    };

    await fetch("https://script.google.com/macros/s/AKfycbzguxX6eHvoPIF8WR93K_f1i6Fi9_mLbkY-Vn0ygdvhk-PTg5oyB0cPjFDFwZj2gjln/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    // După logare, descarcă PDF-ul
    window.location.href = "resources/CV-SerafimLupan.pdf";

  } catch (error) {
    console.error("Eroare la logare:", error);
    // Continuă cu descărcarea chiar dacă logul a eșuat
    window.location.href = "resources/CV-SerafimLupan.pdf";
  }
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
