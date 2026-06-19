/* =============================================
   Cape Town Student Tech Hub - Main JavaScript
   js/main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------
       1. MOBILE NAV TOGGLE (basic UX enhancement)
    --------------------------------------------- */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    /* ---------------------------------------------
       2. FAQ ACCORDION (services.html)
    --------------------------------------------- */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');

            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('open');
            });

            // Toggle current item
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    /* ---------------------------------------------
       3. SERVICE SEARCH / FILTER (services.html)
    --------------------------------------------- */
    const searchInput = document.getElementById('service-search');
    const serviceItems = document.querySelectorAll('.service-item');
    const noResultsMsg = document.getElementById('no-results-msg');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            serviceItems.forEach(function (item) {
                const title = item.getAttribute('data-title').toLowerCase();
                const keywords = item.getAttribute('data-keywords').toLowerCase();

                if (title.includes(query) || keywords.includes(query)) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            if (noResultsMsg) {
                noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });
    }

    /* ---------------------------------------------
       4. DYNAMIC CONTENT - Load "Tip of the Day" (index.html)
       Simulates dynamically loaded content with JS
    --------------------------------------------- */
    const tipBox = document.getElementById('tech-tip');

    if (tipBox) {
        const tips = [
            "Restart your laptop at least once a week to clear memory and apply updates.",
            "Back up your assignments to cloud storage before major deadlines.",
            "Keep your laptop vents dust-free to prevent overheating during exam season.",
            "Use strong, unique passwords for your student portal and email accounts.",
            "Update your antivirus software regularly to stay protected against new threats.",
            "Save your work every 10 minutes — power cuts happen at the worst times!",
            "Use Ctrl+Z generously. It has saved more assignments than any tech support call."
        ];

        const today = new Date().getDate();
        const todaysTip = tips[today % tips.length];
        tipBox.textContent = todaysTip;
    }

    /* ---------------------------------------------
       5. SCROLL ANIMATIONS - Fade/slide elements into view
    --------------------------------------------- */
    const animatedElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    /* ---------------------------------------------
       6. IMAGE GALLERY LIGHTBOX (gallery.html)
    --------------------------------------------- */
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentImageIndex = 0;
    const imagesArray = Array.from(galleryImages);

    function openLightbox(index) {
        currentImageIndex = index;
        const img = imagesArray[index];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
        openLightbox(currentImageIndex);
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
        openLightbox(currentImageIndex);
    }

    if (galleryImages.length > 0) {
        imagesArray.forEach(function (img, index) {
            img.addEventListener('click', function () {
                openLightbox(index);
            });
        });

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
        if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

        if (lightbox) {
            lightbox.addEventListener('click', function (e) {
                if (e.target === lightbox) closeLightbox();
            });
        }

        document.addEventListener('keydown', function (e) {
            if (!lightbox || !lightbox.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        });
    }

    /* ---------------------------------------------
       7. LEAFLET INTERACTIVE MAPS (contact.html)
    --------------------------------------------- */
    if (document.getElementById('map-cbd')) {
        const mapCBD = L.map('map-cbd').setView([-33.9249, 18.4241], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapCBD);
        L.marker([-33.9249, 18.4241]).addTo(mapCBD)
            .bindPopup('<strong>Cape Town CBD Office</strong><br>12 Buitenkant Street')
            .openPopup();
    }

    if (document.getElementById('map-rosebank')) {
        const mapRosebank = L.map('map-rosebank').setView([-33.9858, 18.4732], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapRosebank);
        L.marker([-33.9858, 18.4732]).addTo(mapRosebank)
            .bindPopup('<strong>Rosebank Study Hub</strong><br>5 Rosmead Avenue')
            .openPopup();
    }

    /* ---------------------------------------------
       8. ENQUIRY FORM VALIDATION (enquiry.html)
    --------------------------------------------- */
    const enquiryForm = document.getElementById('enquiry-form');

    if (enquiryForm) {
        const responseBox = document.getElementById('enquiry-response');

        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors(enquiryForm);
            let isValid = true;

            const firstName = document.getElementById('first-name');
            const lastName = document.getElementById('last-name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const service = document.getElementById('service');
            const description = document.getElementById('description');

            if (!firstName.value.trim()) {
                showError(firstName, 'Please enter your first name.');
                isValid = false;
            }
            if (!lastName.value.trim()) {
                showError(lastName, 'Please enter your last name.');
                isValid = false;
            }
            if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }
            if (phone.value.trim() && !isValidPhone(phone.value)) {
                showError(phone, 'Please enter a valid South African phone number (e.g. 072 123 4567).');
                isValid = false;
            }
            if (!service.value) {
                showError(service, 'Please select a service.');
                isValid = false;
            }
            if (description.value.trim().length < 10) {
                showError(description, 'Please describe your request in at least 10 characters.');
                isValid = false;
            }

            if (isValid) {
                // Simulate processing the enquiry and returning service-specific info
                const servicePricing = {
                    'laptop-repair': { name: 'Laptop Troubleshooting & Repair', price: 'from R150', availability: 'Usually same-day' },
                    'software-install': { name: 'Software Installation & Configuration', price: 'from R100', availability: 'Same-day' },
                    'assignment-format': { name: 'Assignment Formatting Assistance', price: 'from R80', availability: 'Within 24 hours' },
                    'website-setup': { name: 'Basic Website Setup', price: 'from R500', availability: '3-5 working days' },
                    'data-backup': { name: 'Data Backup & Recovery', price: 'from R120', availability: 'Within 48 hours' },
                    'other': { name: 'Custom Request', price: 'Quoted after review', availability: 'We will be in touch shortly' }
                };

                const selected = servicePricing[service.value] || servicePricing['other'];

                responseBox.innerHTML =
                    '<strong>Thanks, ' + escapeHTML(firstName.value) + '!</strong> Your enquiry for <em>' +
                    selected.name + '</em> has been received.<br>' +
                    'Estimated cost: ' + selected.price + '<br>' +
                    'Availability: ' + selected.availability + '<br>' +
                    'We will contact you shortly via your preferred contact method.';
                responseBox.classList.add('show', 'success');
                enquiryForm.reset();
            }
        });
    }

    /* ---------------------------------------------
       9. CONTACT FORM VALIDATION + EMAIL COMPILATION
    --------------------------------------------- */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const responseBox = document.getElementById('contact-response');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors(contactForm);
            let isValid = true;

            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const subject = document.getElementById('contact-subject');
            const message = document.getElementById('contact-message');

            if (!name.value.trim()) {
                showError(name, 'Please enter your full name.');
                isValid = false;
            }
            if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }
            if (!subject.value.trim()) {
                showError(subject, 'Please enter a subject.');
                isValid = false;
            }
            if (message.value.trim().length < 10) {
                showError(message, 'Your message should be at least 10 characters long.');
                isValid = false;
            }

            if (isValid) {
                const recipient = 'info@ctstudenttechhub.co.za';
                const compiledSubject = encodeURIComponent(subject.value);
                const compiledBody = encodeURIComponent(
                    'Name: ' + name.value + '\n' +
                    'Email: ' + email.value + '\n\n' +
                    'Message:\n' + message.value
                );

                const mailtoLink = 'mailto:' + recipient + '?subject=' + compiledSubject + '&body=' + compiledBody;

                responseBox.innerHTML =
                    '<strong>Thank you, ' + escapeHTML(name.value) + '!</strong> Your message has been compiled. ' +
                    'Click <a href="' + mailtoLink + '">here to send your email</a> to ' + recipient + '.';
                responseBox.classList.add('show', 'success');
                contactForm.reset();
            }
        });
    }

    /* ---------------------------------------------
       VALIDATION HELPER FUNCTIONS
    --------------------------------------------- */
    function isValidEmail(value) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value.trim());
    }

    function isValidPhone(value) {
        const pattern = /^(0|\+27)[0-9\s]{8,12}$/;
        return pattern.test(value.trim());
    }

    function showError(inputEl, message) {
        inputEl.classList.add('input-error');
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        inputEl.parentNode.insertBefore(errorEl, inputEl.nextSibling);
    }

    function clearErrors(form) {
        form.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });
        form.querySelectorAll('.input-error').forEach(function (el) { el.classList.remove('input-error'); });
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

});