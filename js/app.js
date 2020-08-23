/**
 * Exercise programmatically builds navigation, scrolls to anchors from navigation, and highlights
 * section in viewport upon scrolling.
 */

// Create the navigation menu
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('.section-wrapper');

// TODO: refactor element creation and use li; change to use scroll to
const navItems = document.createDocumentFragment();
sections.forEach(function (section) {
  const link = document.createElement('a');
  link.textContent = section.getAttribute('data-nav');
  link.href = `#${section.id}`;
  navItems.appendChild(link);
});
navList.appendChild(navItems);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active
