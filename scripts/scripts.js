// Dark mode toggle
function setupDarkModeToggle() {
  const ROOT = document.documentElement;
  const STORAGE_KEY = "theme"; // "light" | "dark"

  // Apply stored preference on load
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") {
    ROOT.setAttribute("data-theme", "dark");
  }

  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  const reflect = () => {
    const mode = ROOT.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const label =
      mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  };
  reflect();

  btn.addEventListener("click", () => {
    const isDark = ROOT.getAttribute("data-theme") === "dark";
    if (isDark) {
      ROOT.removeAttribute("data-theme"); // back to light
      localStorage.setItem(STORAGE_KEY, "light");
    } else {
      ROOT.setAttribute("data-theme", "dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    }
    reflect();
  });
}


// Rainbow hover effect
function applyRainbowHover() {
  document.querySelectorAll(".rainbow-hover").forEach((el) => {
    if (el.dataset.rh === "1") return; // already processed
    const text = el.textContent;
    el.innerHTML = Array.from(text, (char, i) =>
      char === " "
        ? `<span style="--i:${i}">&nbsp;</span>`
        : `<span style="--i:${i}">${char}</span>`
    ).join("");
    el.dataset.rh = "1"; // mark so we don’t re-wrap
  });
}



// Smooth scroll to top when clicking "Home" link
function setupHomeLinkScroll() {
  const homeLink = document.getElementById("home-link");
  if (homeLink) {
    const onHome =
      location.pathname === "/" ||
      location.pathname.endsWith("/index.html") ||
      location.pathname === "/index.html";
    if (onHome) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
}

// Smooth scroll to "Contact" section
function setupContactLinkScroll() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a) return;

    const isContactLink =
      a.id === "contact-link" ||
      a.hash === "#contact" ||
      a.textContent.trim().toLowerCase() === "contact";
    if (isContactLink) {
      e.preventDefault();
      const target =
        document.getElementById("contact") || document.querySelector("footer");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Initialize all behaviors
document.addEventListener("DOMContentLoaded", () => {
  applyRainbowHover();
  setupHomeLinkScroll();
  setupContactLinkScroll();
  setupDarkModeToggle();
});
