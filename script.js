// ---------- EDUCATION SLIDER (BG moved to con-content) ---------- //

const educData = [
    {
        school: "COLEGIO DE MONTALBAN",
        year: "2024 - 2028",
        program: "BS INFORMATION TECHNOLOGY",
        extra: "SOPHOMORE",
        bg: "Pictures/college.png"
    },
    {
        school: "ASIAN INSTITUTE OF COMPUTER STUDIES",
        year: "2022 - 2024",
        program: "ICT STRAND",
        extra: "WITH HONORS",
        bg: "Pictures/senior.png"
    },
    {
        school: "SOUTHVILLE 8-C NATIONAL HIGH SCHOOL",
        year: "2018 - 2022",
        program: "JUNIOR HIGH",
        extra: "COMPLETER",
        bg: "Pictures/highschool.png"
    },
    {
        school: "SOUTHVILLE 8-C ELEMENTARY SCHOOL",
        year: "2012 - 2017",
        program: "ELEMENTARY",
        extra: "GRADUATE",
        bg: "Pictures/elem.png"
    }
];

let index = 0;

function loadEducation() {
  const data = educData[index];
  const content = document.getElementById("educ-content");
  content.style.backgroundImage = `url('${data.bg}')`;
  document.getElementById("school").textContent = data.school;
  document.getElementById("year").textContent = data.year;
  document.getElementById("program").textContent = data.program;
  document.getElementById("extra").textContent = data.extra;
}


document.getElementById("educ-left").onclick = () => {
    index = (index - 1 + educData.length) % educData.length;
    loadEducation();
};

document.getElementById("educ-right").onclick = () => {
    index = (index + 1) % educData.length;
    loadEducation();
};

loadEducation();




// Certificate icon link
const certIcon = "https://cdn-icons-png.flaticon.com/512/6703/6703900.png";

// Replace these with your real certificate image file names
const certImages = [
    "certificates/cert1.png",
    "certificates/cert2.png",
    "certificates/cert3.png",
    "certificates/cert4.png",
    "certificates/cert5.png",
    "certificates/cert6.png",
    "certificates/cert7.png",
    "certificates/cert8.png",
    "certificates/cert9.png",
    "certificates/cert10.png"
];

// Titles (you can rename)
const certificateTitles = [
    "Web Development Training",
    "HTML & CSS Bootcamp",
    "JavaScript Fundamentals",
    "Cybersecurity Basics",
    "Intro to Networking",
    "Database Essentials",
    "Python Bootcamp",
    "UX/UI Foundations",
    "IT Support Workshop",
    "Computer Literacy Award"
];

document.addEventListener("DOMContentLoaded", () => {

    const icons = document.querySelectorAll(".cert-icon");
    const modal = document.getElementById("cert-modal");
    const panelImage = document.getElementById("cert-image");
    const closeBtn = document.getElementById("close-cert");

    // Ensure modal hidden on page load
    modal.style.display = "none";

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const certSrc = icon.dataset.cert;
            panelImage.src = certSrc;
            modal.style.display = "flex"; // OPEN modal
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        panelImage.src = "";
    });

    // Close clicking outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            panelImage.src = "";
        }
    });

});


/* ========= SCROLL TRIGGER ANIMATIONS ========= */

const revealElements = document.querySelectorAll(".sec");

revealElements.forEach(sec => {
    sec.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(sec => {
    observer.observe(sec);
});
