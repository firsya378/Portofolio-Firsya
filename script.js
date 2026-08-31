// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// MOBILE HAMBURGER MENU
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// PROJECT FILTERS
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        projectCards.forEach(card => {
            const filters = card.dataset.filters.split(',');
            
            if (filter === 'all' || filters.includes(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========================================
// PROJECT DETAILS MODAL
// ========================================
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Project data for modal
const projectDetails = {
    1: {
        title: 'ReWeave',
        subtitle: 'Moklet Idea Challenge',
        overview: 'ReWeave is a fashion-focused web application developed for the Moklet Idea Challenge competition. The platform aims to bridge the gap between traditional fashion and modern digital solutions.',
        contribution: 'I contributed to the UI design, frontend development, and database management for this project. I also helped integrate the various components into a cohesive web application.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP', 'MySQL', 'Figma'],
        keyFeatures: [
            'User authentication and profiles',
            'Product catalog and browsing',
            'Shopping cart functionality',
            'Order management system',
            'Responsive design'
        ]
    },
    2: {
        title: 'Cloud Infrastructure Project',
        subtitle: 'Computer Network Engineering Skills Competency',
        overview: 'Designed, deployed, and managed cloud infrastructure using Amazon Web Services. This project involved setting up a complete cloud environment with networking, compute, storage, and database services.',
        contribution: 'I designed the cloud architecture, configured AWS services, deployed web applications on EC2, managed RDS databases, set up S3 storage, and implemented load balancing with ELB and Auto Scaling.',
        technologies: ['AWS', 'EC2', 'VPC', 'RDS', 'S3', 'ELB', 'Auto Scaling', 'IAM', 'MySQL', 'GitHub'],
        keyFeatures: [
            'Complete cloud infrastructure design',
            'Multi-tier application deployment',
            'Scalable and highly available architecture',
            'Automated infrastructure with IAM',
            'Integration with web application'
        ]
    },
    3: {
        title: 'FocusMate',
        subtitle: 'Final Semester Project',
        overview: 'Developed a dynamic productivity website with AI-oriented task management as a final semester project. The platform helps users manage tasks with intelligent suggestions and productivity tracking.',
        contribution: 'I was responsible for full-stack development including frontend with HTML/CSS/JavaScript, backend with PHP, database design with MySQL, and overall UI/UX design. I also handled troubleshooting and code quality improvements.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP', 'MySQL', 'VS Code', 'GitHub'],
        keyFeatures: [
            'Task management with AI suggestions',
            'User dashboard and analytics',
            'Priority-based task organization',
            'Productivity tracking',
            'Responsive and clean interface'
        ]
    }
};

document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.dataset.project;
        const data = projectDetails[projectId];
        
        if (data) {
            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <p class="modal-subtitle">${data.subtitle}</p>
                
                <h4>Project Overview</h4>
                <p style="color: var(--text-secondary); line-height: 1.7;">${data.overview}</p>
                
                <h4>My Contribution</h4>
                <p style="color: var(--text-secondary); line-height: 1.7;">${data.contribution}</p>
                
                <h4>Technologies Used</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px;">
                    ${data.technologies.map(tech => `
                        <span style="padding: 4px 14px; background: var(--background); border-radius: 999px; font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); border: 1px solid var(--border);">${tech}</span>
                    `).join('')}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    ${data.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
const revealElements = document.querySelectorAll(
    '.about-grid, .whatido-grid, .skills-grid, .projects-grid, .timeline, .achievements-grid, .contact-grid'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObserver.observe(el);
});

// ========================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

console.log('🚀 Firsya Julian Rovalina Portfolio loaded successfully!');