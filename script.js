document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  if (open) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "65px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "#fff";
    nav.style.padding = "18px 5%";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
    nav.style.borderBottom = "1px solid #dce3eb";
    nav.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";
  } else {
    nav.removeAttribute("style");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850 && nav.classList.contains("mobile-open")) {
      nav.classList.remove("mobile-open");
      nav.removeAttribute("style");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thank you. Your enquiry has been received. Connect this form to your email/CRM before publishing.";
});
