function setupNavToggle() {
  const nav = document.querySelector("header > nav");
  if (!nav) return;

  const btn = nav.querySelector(".nav-toggle");
  const links = nav.querySelector(".links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.classList.toggle("is-active", open);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!links.classList.contains("is-open")) return;
    if (e.target.closest(".links") || e.target.closest(".nav-toggle")) return;
    links.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("is-active");
  });
}

// Dark mode toggle
function setupDarkModeToggle() {
  const ROOT = document.documentElement;
  const STORAGE_KEY = "theme"; // "light" | "dark"

  // Apply stored preference on load
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") {
    ROOT.setAttribute("data-theme", "dark");
  } else if (stored === "light") {
    ROOT.setAttribute("data-theme", "light");
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
      ROOT.setAttribute("data-theme", "light"); // force light instead of removing
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
  setupNavToggle();
});
