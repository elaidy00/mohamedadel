// =============================
// EduPro - Main Interactions
// =============================
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// Course filter on courses page
const searchInput = document.querySelector("[data-course-search]");
const courseCards = document.querySelectorAll("[data-course-card]");

if (searchInput && courseCards.length > 0) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    courseCards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const tags = card.dataset.tags || "";
      const matches = title.includes(query) || tags.includes(query);
      card.style.display = matches ? "flex" : "none";
    });
  });
}

// Modal preview for course cards
const modalOverlay = document.querySelector(".modal-overlay");
const modalTitle = document.querySelector("[data-modal-title]");
const modalBody = document.querySelector("[data-modal-body]");
const modalClose = document.querySelector("[data-modal-close]");
const modalTriggers = document.querySelectorAll("[data-modal-trigger]");

const openModal = (title, body) => {
  if (!modalOverlay) return;
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modalOverlay.classList.add("open");
};

const closeModal = () => {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("open");
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const title = trigger.dataset.title || "Course Preview";
    const body = trigger.dataset.body || "Preview details for this course.";
    openModal(title, body);
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

// Simple dropdown interaction for dashboard
const dropdownToggle = document.querySelector("[data-dropdown-toggle]");
const dropdownMenu = document.querySelector("[data-dropdown-menu]");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
  });
}
