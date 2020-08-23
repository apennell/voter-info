/**
 * Exercise programmatically builds navigation, scrolls to anchors from navigation, and highlights
 * section in viewport upon scrolling.
 */

// Create the navigation menu
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('.section-wrapper');

const navItems = document.createDocumentFragment();
sections.forEach(({id, dataset: {nav}}) => {
  const li = document.createElement('li');
  const link = `<a href="#${id}">${nav}</a>`;
  li.innerHTML = link;
  navItems.appendChild(li);
});
navList.appendChild(navItems);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// Scroll to section on link click

// Set sections as active
