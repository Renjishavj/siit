document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("active");
  });
});
