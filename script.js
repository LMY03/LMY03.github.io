// ====== CONFIGURABLE DATA ======

// Social Media Links
const socialLinks = [
  { href: 'https://github.com/LMY03', icon: 'fab fa-github', label: 'GitHub' },
  // { href: 'https://www.linkedin.com/in/jonathanlin03', icon: 'fab fa-linkedin', label: 'LinkedIn' },
];

// Projects (image-first, details always visible)
const projects = [
  {
    title: 'Capstone',
    link: 'https://github.com/LMY03/CAPSTONE2240',
    demo: '',
    tech: ['Proxmox', 'Docker', 'PHP'],
    mainTech: 'Proxmox, Docker, PHP',
    desc: 'A capstone project using Proxmox and Docker for virtualization and automation.',
    details: 'Automates deployment and management of virtual machines and containers for IT infrastructure.',
    modalImages: [
      'images/capstone/capstone.png',
      'images/capstone/guacamole.png',
      'images/capstone/login.png',
      'images/capstone/monitoring.png',
      'images/capstone/report.png',
      'images/capstone/ticket.png',
      'images/capstone/ticketing.png',
    ],
  },
  {
    title: 'Restoran',
    link: 'https://github.com/QuirosLuigi/ITIS',
    demo: '',
    tech: ['PHP', 'MySQL'],
    mainTech: 'PHP, MySQL',
    desc: 'A restaurant management system for orders and inventory.',
    details: 'Supports order tracking, inventory management, and reporting for restaurant operations.',
    modalImages: [],
  },
  {
    title: 'Pokemon-RPG',
    link: 'https://github.com/LMY03/PKM-RPG',
    demo: '',
    tech: ['Python'],
    mainTech: 'Python',
    desc: 'A classic Pokémon RPG game built in Python.',
    details: 'Implements turn-based battles, exploration, and Pokémon collection mechanics.',
    modalImages: [
      'images/pkm-rpg/rpg.png',
      'images/pkm-rpg/battle.png',
      'images/pkm-rpg/login.png',
      'images/pkm-rpg/pokedex.png',
    ],
  },
  {
    title: 'Atrium',
    link: 'https://github.com/Klaexis/MCO3-CCAPDEV',
    demo: '',
    tech: ['Node.js', 'Express', 'MongoDB'],
    mainTech: 'Node.js, Express, MongoDB',
    desc: 'An art community platform for sharing and discovering artworks.',
    details: 'Features user authentication, artwork uploads, and a social feed for artists and enthusiasts.',
    modalImages: [],
  },
  {
    title: 'Pokechess Unite',
    link: 'https://github.com/LMY03/Pokechess-Unite',
    demo: '',
    tech: ['Python', 'Pygame'],
    mainTech: 'Python, Pygame',
    desc: 'A chess-inspired Pokémon game with unique mechanics and multiplayer support.',
    details: 'Combines chess and Pokémon gameplay, with custom sprites, animations, and multiplayer features.',
    modalImages: [
      'images/pokechess-unite/pokechess-unite.png',
      'images/pokechess-unite/pokemon-select.png',
      'images/pokechess-unite/battle.png',
    ],
  },
  {
    title: 'Enrollment System',
    link: 'https://github.com/LMY03/Enrollment',
    demo: '',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    mainTech: 'PHP, MySQL',
    desc: 'A web app for managing student enrollments, including admin dashboard and student management.',
    details: 'Built for university use, this system streamlines enrollment, supports admin and student roles, and features secure authentication and reporting tools.',
    modalImages: ['images/enrollment1.png', 'images/enrollment2.png'],
  },
];

// Certificates (with issue date, issuer, and 'Show credentials' button)
const certificates = [
  {
    name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issued: 'March 29, 2023',
    issuer: 'Amazon Web Services Training and Certification',
    link: 'https://www.credly.com/badges/35552c57-0cd5-47fb-88a6-870012b2b02f/public_url',
  },
  {
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issued: 'May 06, 2024',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/241aa575-d1df-46cc-9eaf-4c9f9bc5e613/public_url',
  },
];

// Skills (FontAwesome icon class or SVG, and label)
const skills = [
  { icon: 'fab fa-cuttlefish', label: 'C' },
  { icon: 'fab fa-java', label: 'Java' },
  { icon: 'fas fa-database', label: 'MySQL' },
  { icon: 'fab fa-php', label: 'PHP' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-korvue', label: 'Kotlin' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-docker', label: 'Docker' },
  { icon: 'fas fa-server', label: 'Proxmox' },
  { icon: 'fab fa-python', label: 'Django' },
];

// ====== DYNAMIC RENDERING ======

// Social Links
const navSocial = document.getElementById('nav-social');
if (navSocial) {
  navSocial.innerHTML = socialLinks.map(s =>
    `<a href="${s.href}" target="_blank" aria-label="${s.label}"><i class="${s.icon}"></i></a>`
  ).join('');
}

// Projects: image-first, details always visible, with modal popup
const projectList = document.getElementById('project-list');
if (projectList) {
  projectList.innerHTML = projects.map((p, i) => `
    <div class="project-card visual always-details" data-index="${i}">
      <div class="project-img-wrap">
        <img src="${p.modalImages[0]}" alt="${p.title} Screenshot" onerror="this.style.display='none'">
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <div class="project-desc">${p.desc}</div>
        <div class="project-categories">
          ${p.mainTech.split(',').map(cat => `<span class="project-category">${cat.trim()}</span>`).join('')}
        </div>
        <div class="project-links-row">
          <div class="project-links">
            <a href="${p.link}" target="_blank" aria-label="View Source Code on GitHub"><i class="fab fa-github"></i></a>
            ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ''}
          </div>
          <button class="project-details-btn" data-index="${i}" aria-label="More Details"><i class="fas fa-info-circle"></i></button>
        </div>
      </div>
    </div>
  `).join('') + '<div id="project-modal" class="project-modal"><div class="project-modal-content"><span class="project-modal-close">&times;</span><div id="project-modal-body"></div></div></div>';
}

// Modal logic for project details with image carousel
let currentModalImg = 0;
function showProjectModal(index) {
  const p = projects[index];
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');
  if (!modal || !body) return;
  currentModalImg = 0;

  function renderCarousel(imgIdx) {
    let imagesHtml = '';
    const imgSrc = p.modalImages[imgIdx];
    if (p.modalImages.length === 1) {
      imagesHtml = `
        <div class="project-modal-carousel">
          <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
            <img id="project-modal-img" src="${imgSrc}" alt="${p.title} screenshot" onerror="this.style.display='none'">
          </div>
        </div>
      `;
    } else {
      // Placeholder: will update after image loads
      imagesHtml = `
        <div class="project-modal-carousel" id="carousel-orientation">
          <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
            <img id="project-modal-img" src="${imgSrc}" alt="${p.title} screenshot" onerror="this.style.display='none'">
          </div>
        </div>
      `;
    }
    return imagesHtml;
  }

  body.innerHTML = `
    <div class="project-modal-title">${p.title}</div>
    ${renderCarousel(0)}
    <div class="project-modal-desc">${p.details || p.desc}</div>
    <div class="project-modal-tech">${p.tech.map(tech => `<span class='tech-badge'>${tech}</span>`).join(' ')}</div>
    <div class="project-links">
      <a href="${p.link}" target="_blank" aria-label="View Source Code on GitHub"><i class="fab fa-github"></i></a>
      ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ''}
    </div>
  `;
  modal.style.display = 'block';

  if (p.modalImages.length > 1) {
    const imgEl = document.getElementById('project-modal-img');
    imgEl.onload = function() {
      const isLandscape = imgEl.naturalWidth >= imgEl.naturalHeight;
      const carousel = document.getElementById('carousel-orientation');
      if (!carousel) return;
      if (isLandscape) {
        // Arrows overlayed on left/right inner edge of the image
        carousel.innerHTML = `
          <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
            <img id="project-modal-img" src="${p.modalImages[currentModalImg]}" alt="${p.title} screenshot" onerror="this.style.display='none'">
            <button class="project-modal-arrow left" id="modal-arrow-left" style="position:absolute; left:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-left'></i></button>
            <button class="project-modal-arrow right" id="modal-arrow-right" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-right'></i></button>
          </div>
        `;
      } else {
        // Use the same overlay logic as landscape
        carousel.innerHTML = `
          <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
            <img id="project-modal-img" src="${p.modalImages[currentModalImg]}" alt="${p.title} screenshot" onerror="this.style.display='none'">
            <button class="project-modal-arrow left" id="modal-arrow-left" style="position:absolute; left:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-left'></i></button>
            <button class="project-modal-arrow right" id="modal-arrow-right" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-right'></i></button>
          </div>
        `;
      }
      document.getElementById('modal-arrow-left').onclick = function(e) {
        e.stopPropagation();
        currentModalImg = (currentModalImg - 1 + p.modalImages.length) % p.modalImages.length;
        updateCarousel();
      };
      document.getElementById('modal-arrow-right').onclick = function(e) {
        e.stopPropagation();
        currentModalImg = (currentModalImg + 1) % p.modalImages.length;
        updateCarousel();
      };
    };
    function updateCarousel() {
      const imgEl = document.getElementById('project-modal-img');
      imgEl.src = p.modalImages[currentModalImg];
      imgEl.onload = function() {
        const isLandscape = imgEl.naturalWidth >= imgEl.naturalHeight;
        const carousel = document.getElementById('carousel-orientation');
        if (!carousel) return;
        if (isLandscape) {
          carousel.innerHTML = `
            <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
              <img id="project-modal-img" src="${p.modalImages[currentModalImg]}" alt="${p.title} screenshot" onerror="this.style.display='none'">
              <button class="project-modal-arrow left" id="modal-arrow-left" style="position:absolute; left:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-left'></i></button>
              <button class="project-modal-arrow right" id="modal-arrow-right" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-right'></i></button>
            </div>
          `;
        } else {
          // Use the same overlay logic as landscape
          carousel.innerHTML = `
            <div class="carousel-img-wrap" style="position:relative; display:inline-block;">
              <img id="project-modal-img" src="${p.modalImages[currentModalImg]}" alt="${p.title} screenshot" onerror="this.style.display='none'">
              <button class="project-modal-arrow left" id="modal-arrow-left" style="position:absolute; left:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-left'></i></button>
              <button class="project-modal-arrow right" id="modal-arrow-right" style="position:absolute; right:8px; top:50%; transform:translateY(-50%);"><i class='fas fa-chevron-right'></i></button>
            </div>
          `;
        }
        document.getElementById('modal-arrow-left').onclick = function(e) {
          e.stopPropagation();
          currentModalImg = (currentModalImg - 1 + p.modalImages.length) % p.modalImages.length;
          updateCarousel();
        };
        document.getElementById('modal-arrow-right').onclick = function(e) {
          e.stopPropagation();
          currentModalImg = (currentModalImg + 1) % p.modalImages.length;
          updateCarousel();
        };
      };
    }
  }
}

document.addEventListener('click', function(e) {
  // Open modal if clicking card, details icon, but not if clicking a link
  const detailsBtn = e.target.closest('.project-details-btn');
  if (detailsBtn) {
    const card = detailsBtn.closest('.project-card');
    if (card && card.hasAttribute('data-index')) {
      showProjectModal(card.getAttribute('data-index'));
    }
    return;
  }
  if (e.target.closest('.project-card') && !e.target.closest('a') && !e.target.closest('button') && e.target.closest('.project-card')) {
    const card = e.target.closest('.project-card');
    if (card && card.hasAttribute('data-index')) {
      showProjectModal(card.getAttribute('data-index'));
    }
    return;
  }
  if (e.target.classList.contains('project-modal-close')) {
    document.getElementById('project-modal').style.display = 'none';
  }
  if (e.target.id === 'project-modal') {
    document.getElementById('project-modal').style.display = 'none';
  }
});

// Certificates: name, issuer, issued date, and 'Show credentials' button
const certList = document.getElementById('cert-list');
if (certList) {
  certList.innerHTML = certificates.map(c => `
    <div class="cert-card visual no-logo">
      <div class="cert-info">
        <p class="cert-name">${c.name}</p>
        <p class="cert-issuer">Issued by ${c.issuer}</p>
        <p class="cert-issued">Issued: ${c.issued}</p>
        <a href="${c.link}" target="_blank" class="cert-view-btn">Show credentials</a>
      </div>
    </div>
  `).join('');
}

// Skills
const skillsList = document.getElementById('skills-list');
if (skillsList) {
  skillsList.innerHTML = skills.map(s => `
    <div class="skill-card">
      <i class="${s.icon}"></i>
      <span>${s.label}</span>
    </div>
  `).join('');
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
} 