// ===================================
// CAT DATA
// ===================================

const catsData = [
    {
        id: 1,
        name: "Whiskers",
        age: 2,
        gender: "Male",
        breed: "Tabby",
        image: "assets/images/cat1.jpg",
        description: "Friendly and playful tabby who loves attention",
        personality: "Whiskers is an energetic and social cat who loves to play with toys and interact with people. He's great with children and gets along well with other cats. He enjoys lounging in sunny spots and will purr loudly when petted."
    },
    {
        id: 2,
        name: "Luna",
        age: 1,
        gender: "Female",
        breed: "Siamese",
        image: "assets/images/cat2.jpg",
        description: "Elegant Siamese with beautiful blue eyes",
        personality: "Luna is a graceful and vocal cat who loves to 'talk' to her humans. She's very affectionate and enjoys being the center of attention. Luna is intelligent and curious, always exploring her surroundings."
    },
    {
        id: 3,
        name: "Oliver",
        age: 3,
        gender: "Male",
        breed: "Maine Coon",
        image: "assets/images/cat3.jpg",
        description: "Large, gentle giant with a fluffy coat",
        personality: "Oliver is a laid-back and gentle cat despite his large size. He's very patient and tolerant, making him perfect for families. He enjoys being brushed and loves to follow his humans around the house."
    },
    {
        id: 4,
        name: "Bella",
        age: 4,
        gender: "Female",
        breed: "Persian",
        image: "assets/images/cat4.jpg",
        description: "Sweet Persian with luxurious long fur",
        personality: "Bella is a calm and dignified cat who prefers a quiet environment. She loves to be pampered and enjoys gentle grooming sessions. She's affectionate with her favorite people and makes a wonderful lap cat."
    },
    {
        id: 5,
        name: "Max",
        age: 2,
        gender: "Male",
        breed: "British Shorthair",
        image: "assets/images/cat5.jpg",
        description: "Charming British Shorthair with round features",
        personality: "Max is an easygoing and adaptable cat who gets along with everyone. He's playful but not overly demanding, making him a great companion. He enjoys interactive toys and cozy napping spots."
    },
    {
        id: 6,
        name: "Chloe",
        age: 1,
        gender: "Female",
        breed: "Calico",
        image: "assets/images/cat6.jpg",
        description: "Colorful calico with a spunky personality",
        personality: "Chloe is a spirited and independent cat with lots of energy. She loves to climb and explore high places. Despite her independent streak, she's very affectionate and enjoys cuddle time on her own terms."
    },
    {
        id: 7,
        name: "Charlie",
        age: 5,
        gender: "Male",
        breed: "Domestic Shorthair",
        image: "assets/images/cat7.jpg",
        description: "Mature and mellow companion cat",
        personality: "Charlie is a mature cat who has mellowed with age. He's the perfect companion for someone looking for a calm, low-maintenance pet. He enjoys quiet companionship and gentle affection."
    },
    {
        id: 8,
        name: "Daisy",
        age: 3,
        gender: "Female",
        breed: "Ragdoll",
        image: "assets/images/cat8.jpg",
        description: "Docile Ragdoll who goes limp when held",
        personality: "Daisy lives up to her breed's reputation by going completely relaxed when picked up. She's extremely gentle and patient, making her ideal for families with children. She follows her humans from room to room."
    },
    {
        id: 9,
        name: "Simba",
        age: 2,
        gender: "Male",
        breed: "Orange Tabby",
        image: "assets/images/cat9.jpg",
        description: "Adventurous orange tabby with golden fur",
        personality: "Simba is a confident and adventurous cat who loves to explore. He's very social and enjoys meeting new people. He's playful and energetic, always ready for a game of chase or fetch."
    }
];

// ===================================
// MOBILE NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Initialize page-specific functionality
    initAdoptionPage();
    initAdoptionForm();
    initContactForm();
});

// ===================================
// ADOPTION PAGE FUNCTIONALITY
// ===================================

function initAdoptionPage() {
    const catsGrid = document.getElementById('catsGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    if (!catsGrid) return;

    // Render all cats
    renderCats(catsData);

    // Search functionality with debounce
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                filterCats(searchTerm);
            }, 300); // 300ms debounce
        });
    }

    function renderCats(cats) {
        catsGrid.innerHTML = '';
        
        if (cats.length === 0) {
            noResults.style.display = 'block';
            catsGrid.style.display = 'none';
            return;
        }

        noResults.style.display = 'none';
        catsGrid.style.display = 'grid';

        cats.forEach(cat => {
            const catCard = createCatCard(cat);
            catsGrid.appendChild(catCard);
        });
    }

    function createCatCard(cat) {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}" class="cat-image" onerror="this.src='assets/images/placeholder-cat.jpg'">
            <div class="cat-info">
                <h3 class="cat-name">${cat.name}</h3>
                <div class="cat-details">
                    <span class="detail-badge">${cat.age} year${cat.age !== 1 ? 's' : ''} old</span>
                    <span class="detail-badge">${cat.gender}</span>
                </div>
                <p class="cat-breed">${cat.breed}</p>
                <p class="cat-description">${cat.description}</p>
            </div>
        `;

        // Add click event to open modal
        card.addEventListener('click', function() {
            openCatModal(cat);
        });

        return card;
    }

    function filterCats(searchTerm) {
        if (searchTerm === '') {
            renderCats(catsData);
            return;
        }

        const filteredCats = catsData.filter(cat => {
            return cat.name.toLowerCase().includes(searchTerm) ||
                   cat.age.toString().includes(searchTerm) ||
                   cat.breed.toLowerCase().includes(searchTerm);
        });

        renderCats(filteredCats);
    }
}

// ===================================
// CAT MODAL FUNCTIONALITY
// ===================================

function openCatModal(cat) {
    const modal = document.getElementById('catModal');
    if (!modal) return;

    // Populate modal with cat data
    document.getElementById('modalImage').src = cat.image;
    document.getElementById('modalImage').alt = cat.name;
    document.getElementById('modalName').textContent = cat.name;
    document.getElementById('modalAge').textContent = `${cat.age} year${cat.age !== 1 ? 's' : ''} old`;
    document.getElementById('modalGender').textContent = cat.gender;
    document.getElementById('modalBreed').textContent = cat.breed;
    document.getElementById('modalDescription').textContent = cat.description;
    document.getElementById('modalPersonality').textContent = cat.personality;
    
    // Set adopt button link
    const adoptBtn = document.getElementById('modalAdoptBtn');
    adoptBtn.href = `form.html?cat=${encodeURIComponent(cat.name)}`;

    // Show modal
    modal.style.display = 'block';

    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// ===================================
// ADOPTION FORM FUNCTIONALITY
// ===================================

function initAdoptionForm() {
    const adoptionForm = document.getElementById('adoptionForm');
    const preferredCatSelect = document.getElementById('preferredCat');
    
    if (!adoptionForm) return;

    // Populate cat dropdown
    if (preferredCatSelect) {
        catsData.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.name;
            option.textContent = cat.name;
            preferredCatSelect.appendChild(option);
        });

        // Pre-select cat from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const catName = urlParams.get('cat');
        if (catName) {
            preferredCatSelect.value = catName;
        }
    }

    // Handle form submission
    adoptionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            preferredCat: document.getElementById('preferredCat').value,
            message: document.getElementById('message').value
        };

        // Log form data (in real app, this would be sent to server)
        console.log('Adoption Application Submitted:', formData);

        // Hide form and show thank you message
        adoptionForm.style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';

        // Smooth scroll to thank you message
        document.getElementById('thankYouMessage').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    });
}

// ===================================
// CONTACT FORM FUNCTIONALITY
// ===================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('contactMessage').value
        };

        // Log form data (in real app, this would be sent to server)
        console.log('Contact Form Submitted:', formData);

        // Hide form and show success message
        contactForm.style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';

        // Smooth scroll to success message
        document.getElementById('contactSuccess').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
