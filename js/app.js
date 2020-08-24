/**
 * Exercise programmatically builds navigation, scrolls to active section on nav click,
 * and highlights section in viewport upon scrolling.
 */

// === Create the navigation menu ===
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('.section-wrapper');

const navItems = document.createDocumentFragment();
// Create a `li` with anchor for each section found in doc
sections.forEach(({id, dataset: {nav}}) => {
  const li = document.createElement('li');
  li.id = `link-${id}`;
  const link = `<a href="#${id}" class="nav-link">${nav}</a>`;
  li.innerHTML = link;
  navItems.appendChild(li);
});

// Don't append menu items until navList is complete to avoid many repaints
navList.appendChild(navItems);

// === Scroll to selected section on nav click ===
const scrollToSection = (e) => {
  e.preventDefault();

  /**
   * Note: this would be much better to handle with CSS, but wouldn't satisfy project requirements;
   * this will lose focus in an unexpected way, but is a common implementation despite loss
   * of full accessibility
   */
  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
};

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

// === Scroll to top on click ===
const scrollToTop = () => {
  document.querySelector('.grid-wrapper').scrollIntoView({
    behavior: 'smooth',
  });
};

const topButton = document.querySelector('#top-button');
topButton.addEventListener('click', scrollToTop);

/**
 * Toggle active:
 * set which section has class 'active-section' when new section nears top of viewport
 */
const setActiveSection = () => {
  // Reverse section order to find the lowest section near the top of window first
  const reverseSections = [...sections].reverse();

  for (let i = 0; i < reverseSections.length; i++) {
    const section = reverseSections[i];
    const inView = section.getBoundingClientRect().top < 250;
    if (inView) {
      // Only update active classes if changing which section is active to avoid unnecessary repaints
      if (!section.classList.contains('active-section')) {
        const lastActiveSection = document.querySelector('.active-section');
        lastActiveSection &&
          lastActiveSection.classList.remove('active-section');
        const lastActiveNav = document.querySelector('.active-nav');
        lastActiveNav && lastActiveNav.classList.remove('active-nav');

        section.classList.add('active-section');
        const activeNavItem = document.querySelector(`#link-${section.id}`);
        activeNavItem.classList.add('active-nav');
      }

      // Stop searching once active view is found
      break;
    }
  }
};

window.addEventListener('scroll', setActiveSection);
