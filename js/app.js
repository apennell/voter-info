// Exercise programmatically builds navigation and highlights section in viewport upon scrolling.

// Create the navigation menu
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('.section-wrapper');

const navItems = document.createDocumentFragment();
sections.forEach(({id, dataset: {nav}}) => {
  const li = document.createElement('li');
  li.id = `link-${id}`;
  const link = `<a href="#${id}">${nav}</a>`;
  li.innerHTML = link;
  navItems.appendChild(li);
});
navList.appendChild(navItems);

// Toggle which section has class 'active-section' when new class nears top of viewport on scroll
window.addEventListener('scroll', () => {
  // Reverse section order to find the lowest section near the top of window first
  const reverseSections = [...sections].reverse();

  for (let i = 0; i < reverseSections.length; i++) {
    const section = reverseSections[i];
    const sectionPosition = section.getBoundingClientRect();
    const inView = sectionPosition.top < 250;
    if (inView) {
      // Only update active classes if changing which section is active
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
});

// Scroll to top
