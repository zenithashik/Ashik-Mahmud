'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (formInputs.length > 0 && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks.length > 0 && pages.length > 0) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      // Get the text content of the clicked link (lowercase)
      const currentLink = this.innerHTML.toLowerCase();
      
      // Loop through all pages
      for (let j = 0; j < pages.length; j++) {
        // Check if the page's data-page matches the link text
        if (currentLink === pages[j].dataset.page) {
          // Activate the matching page and navigation link
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          // Deactivate non-matching pages and navigation links
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}

// Project filtering functionality (simplified)
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");

if (filterButtons.length > 0 && filterItems.length > 0) {
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      // Remove active class from all buttons
      for (let j = 0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active");
      }
      
      // Add active class to clicked button
      this.classList.add("active");
      
      // Get filter value
      const filterValue = this.innerHTML.toLowerCase();
      
      // Filter items
      for (let k = 0; k < filterItems.length; k++) {
        if (filterValue === "all") {
          filterItems[k].classList.add("active");
        } else if (filterItems[k].dataset.category === filterValue) {
          filterItems[k].classList.add("active");
        } else {
          filterItems[k].classList.remove("active");
        }
      }
    });
  }
}

// Mobile select filter (if exists)
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

if (select && selectItems.length > 0) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Add event to all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      elementToggleFunc(select);
      
      // Filter items based on selection
      if (filterItems.length > 0) {
        for (let j = 0; j < filterItems.length; j++) {
          if (selectedValue === "all") {
            filterItems[j].classList.add("active");
          } else if (selectedValue === filterItems[j].dataset.category) {
            filterItems[j].classList.add("active");
          } else {
            filterItems[j].classList.remove("active");
          }
        }
      }
    });
  }
}