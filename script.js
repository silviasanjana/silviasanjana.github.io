/* ===== Publications data (from CV) ===== */
const PUBLICATIONS = [
  {
    year: "2025",
    title: "A Systematic Review of AI-Driven Interviewing Systems for Technical and Professional Skills",
    authors: ["Silvia Sanjana", "Selena He", "Joy Li"],
    venue: "2025 Information Systems and Computing Academic Professionals (ISCAP) Conference, Louisville, KY",
    tags: ["AI", "Systematic Review", "HCI"],
    accepted: true,
    cites: 1,
    link: "https://www.researchgate.net/profile/Silvia-Sanjana-3/publication/397481406_A_Systematic_Review_of_AI-Driven_Interviewing_Systems_for_Technical_and_Professional_Skills/links/6912b9e4a2b691617b6af0ef/A-Systematic-Review-of-AI-Driven-Interviewing-Systems-for-Technical-and-Professional-Skills.pdf"
  },
  {
    year: "2024",
    title: "An Early-Stage Diagnosis of Diabetic Retinopathy Based on Ensemble Framework",
    authors: ["Anis-Ul-Islam Rafid", "Silvia Sanjana", "Muhaimin Bin Munir", "Nusrat Sharmin"],
    venue: "Signal, Image and Video Processing (SIViP) 18, 735–749, Springer Nature",
    tags: ["Journal", "Medical Imaging", "Ensemble"],
    cites: 11,
    link: "https://link.springer.com/article/10.1007/s11760-023-02796-5"
  },
  {
    year: "2022",
    title: "Face Mask Detection using Deep Learning and Transfer Learning Models",
    authors: ["Nazmus Shakib Shadin", "Silvia Sanjana", "Daiyan Ibrahim"],
    venue: "2022 Int'l Conference on Innovations in Science, Engineering and Technology (ICISET)",
    tags: ["Conference", "Deep Learning", "Computer Vision"],
    cites: 4,
    link: "https://ieeexplore.ieee.org/document/9775925"
  },
  {
    year: "2022",
    title: "COVID-19 Detection from Lung CT Scan using Transfer Learning Models",
    authors: ["Nazmus Shakib Shadin", "Silvia Sanjana", "Nusrat Jahan Lisa"],
    venue: "Communications in Computer and Information Science (CCIS, vol. 1550), Springer",
    tags: ["Book Chapter", "Medical Imaging", "Transfer Learning"],
    cites: 0,
    link: "http://doi.org/10.1007/978-3-031-17181-9_5"
  },
  {
    year: "2022",
    title: "Performance Analysis of Glaucoma Detection using Deep Learning Models",
    authors: ["Nazmus Shakib Shadin", "Silvia Sanjana", "Sovon Chakraborty", "Nusrat Sharmin"],
    venue: "2022 Int'l Conference on Innovations in Science, Engineering and Technology (ICISET)",
    tags: ["Conference", "Deep Learning", "Medical Imaging"],
    cites: 12,
    link: "http://doi.org/10.1109/ICISET54810.2022.9775828"
  },
  {
    year: "2021",
    title: "Automated Diabetic Retinopathy Detection using Transfer Learning Models",
    authors: ["Silvia Sanjana", "Nazmus Shakib Shadin", "Mayisha Farzana"],
    venue: "2021 5th Int'l Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
    tags: ["Conference", "Transfer Learning", "Medical Imaging"],
    cites: 39,
    link: "https://ieeexplore.ieee.org/document/9667793"
  },
  {
    year: "2021",
    title: "COVID-19 Diagnosis from Chest X-Ray Images using CNN and InceptionV3",
    authors: ["Nazmus Shakib Shadin", "Silvia Sanjana", "Nusrat Jahan Lisa"],
    venue: "2021 Int'l Conference on Information Technology (ICIT), pp. 799–804",
    tags: ["Conference", "CNN", "Medical Imaging"],
    cites: 53,
    link: "https://ieeexplore.ieee.org/document/9491752"
  },
  {
    year: "2021",
    title: "Bangla Numerical Sign Language Recognition using Convolutional Neural Networks",
    authors: ["FM Javed Mehedi Shamrat", "Sovon Chakraborty", "Md Masum Billah", "Moumita Kabir", "Nazmus Shakib Shadin", "Silvia Sanjana"],
    venue: "Indonesian Journal of Electrical Engineering and Computer Science (IJEECS), 2021",
    tags: ["Journal", "CNN", "Computer Vision"],
    cites: 47,
    link: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/24899"
  },
  {
    year: "2021",
    title: "Automated Detection of COVID-19 Pneumonia and Non-COVID-19 Pneumonia from Chest X-Ray Images using CNN",
    authors: ["Nazmus Shakib Shadin", "Silvia Sanjana", "Mayisha Farzana"],
    venue: "2021 2nd Int'l Conference on Innovative and Creative Information Technology (ICITech), pp. 57–63",
    tags: ["Conference", "CNN", "Medical Imaging"],
    cites: 10,
    link: "https://ieeexplore.ieee.org/document/9590174"
  }
];

/* ===== Render publications ===== */
let pubSort = "year"; // "year" | "cites"

function renderPublications() {
  const list = document.getElementById("pubList");
  if (!list) return;

  const items = [...PUBLICATIONS].sort((a, b) => {
    if (pubSort === "cites") return (b.cites || 0) - (a.cites || 0);
    return b.year.localeCompare(a.year) || (b.cites || 0) - (a.cites || 0);
  });

  list.innerHTML = items.map(p => {
    const authors = p.authors
      .map(a => a === "Silvia Sanjana" ? `<span class="me">${a}</span>` : a)
      .join(", ");
    const tags = p.tags.map(t => `<span class="pub__tag">${t}</span>`).join("");
    const accepted = p.accepted ? `<span class="pub__tag pub__tag--accepted">Accepted</span>` : "";
    const cite = (p.cites && p.cites > 0)
      ? `<a class="pub__cite" href="https://scholar.google.com/citations?user=Y7LLV38AAAAJ" target="_blank" rel="noopener" title="View on Google Scholar"><strong>${p.cites}</strong> ${p.cites === 1 ? "citation" : "citations"}</a>`
      : "";
    const link = p.link
      ? `<a class="pub__link" href="${p.link}" target="_blank" rel="noopener">Read paper ↗</a>`
      : `<span class="pub__link" style="opacity:.6;cursor:default">In press</span>`;
    return `
      <li class="pub reveal" data-year="${p.year}">
        <div class="pub__year">${p.year}</div>
        <div class="pub__main">
          <h3>${p.title}</h3>
          <p class="pub__authors">${authors}</p>
          <p class="pub__venue">${p.venue}</p>
          <div class="pub__badges">${cite}${accepted}${tags}</div>
        </div>
        ${link}
      </li>`;
  }).join("");
  observeReveals();
  applyActivePubFilter();
}

/* ===== Publication filtering & sorting ===== */
function applyActivePubFilter() {
  const active = document.querySelector("#pubFilters .pub__filter.is-active");
  const year = active ? active.dataset.year : "all";
  document.querySelectorAll(".pub").forEach(pub => {
    const show = year === "all" || pub.dataset.year === year;
    pub.classList.toggle("is-hidden", !show);
  });
}

function initPubFilters() {
  const filters = document.getElementById("pubFilters");
  if (filters) {
    filters.addEventListener("click", e => {
      const btn = e.target.closest(".pub__filter");
      if (!btn) return;
      filters.querySelectorAll(".pub__filter").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyActivePubFilter();
    });
  }

  const sort = document.getElementById("pubSort");
  if (sort) {
    sort.addEventListener("click", e => {
      const btn = e.target.closest(".pub__sort-btn");
      if (!btn) return;
      sort.querySelectorAll(".pub__sort-btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      pubSort = btn.dataset.sort;
      renderPublications();
    });
  }
}

/* ===== Reveal on scroll ===== */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

/* ===== Animated counters ===== */
function initCounters() {
  const nums = document.querySelectorAll(".stat__num");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 28));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target + suffix; }
        else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
      };
      tick();
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
}

/* ===== Theme toggle ===== */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ===== Nav behaviour ===== */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  });
  burger?.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    links.classList.toggle("is-open");
  });
  links?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    links.classList.remove("is-open");
  }));
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderPublications();
  initPubFilters();
  observeReveals();
  initCounters();
  initTheme();
  initNav();
});
