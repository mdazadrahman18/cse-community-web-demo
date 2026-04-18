function openMobileNav() {
  document.getElementById("mobileNav").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open");
  document.body.style.overflow = "";
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(
    ".club-card, .notice-card, .blog-card, .feature-card, .portal-feat, .event-item",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, box-shadow 0.3s";
    observer.observe(el);
  });
