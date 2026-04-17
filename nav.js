/* ===== NAVIGATION SCRIPT ===== */

window.addEventListener("load", function () {

  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownBtn && dropdown) {

    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    /* close when clicking outside */
    document.addEventListener("click", function () {
      dropdown.classList.remove("active");
    });
  }

});