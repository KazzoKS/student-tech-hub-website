Cape Town Student Tech Hub — Website Project
Student: Kazlyn Storkey (ST10515741)
Module: WEDE5020 — Web Development (Introduction)
Institution: Rosebank College
Project Overview
Cape Town Student Tech Hub is a small student-focused technology support business based in Cape Town, Western Cape. This website was built across three parts (Part 1: HTML structure, Part 2: CSS styling, Part 3: JavaScript functionality and SEO) to give the business a professional online presence.
Website Goals and Objectives
	•	Increase visibility of the business among Rosebank College and university students
	•	Provide clear information on services, pricing, and availability
	•	Allow online enquiries and general contact through validated forms
	•	Build credibility and trust through a professional, accessible design
	•	Ensure the site is mobile-friendly and responsive across devices
Key Features and Functionality
	•	6 HTML pages: Home, About, Services, Gallery, Enquiry, Contact
	•	External CSS stylesheet with a green and white colour scheme, CSS variables, Flexbox/Grid layout, and responsive media queries
	•	JavaScript-powered FAQ accordion on the Services page
	•	Live search/filter functionality for services
	•	Dynamically loaded “Tech Tip of the Day” on the homepage
	•	Image gallery with a custom lightbox (previous/next navigation, keyboard support)
	•	Interactive Leaflet maps for both business locations on the Contact page
	•	Client-side form validation with custom error messages on both the Enquiry and Contact forms
	•	Enquiry form returns a dynamic, service-specific response (pricing and availability)
	•	Contact form compiles a mailto: link so the user can send their message directly
	•	SEO: descriptive title tags, meta descriptions, semantic heading structure, descriptive image alt text, robots.txt, and sitemap.xml
    Changelog
Part 1 (Initial Submission)
	•	Created initial HTML structure for index.html, about.html, services.html, enquiry.html, and contact.html
	•	Set up GitHub repository and file/folder structure
Part 1 — Corrections (made at start of Part 2)
Feedback received: HTML files were submitted empty with no content, and the submission did not adhere to rubric requirements regarding referencing and structure.
Changes made:
	•	Added full, complete content to all 5 HTML pages, including headings, paragraphs, lists, and navigation
	•	Added a semantic HTML structure to every page: <header>, <nav>, <main>, distinct <section> elements, and <footer>
	•	Added a working navigation menu linking all 5 pages consistently across the site
	•	Added a functional HTML form to both enquiry.html and contact.html using appropriate form elements (input, select, textarea, fieldset, radio buttons)
	•	Corrected file and folder structure to match the required layout (root folder containing HTML files, with css, js, and images subfolders)
Part 2 (Initial Submission)
	•	Created external stylesheet (css/style.css) and linked it to all 5 HTML pages
	•	Implemented a green and white colour scheme using CSS custom properties (variables)
	•	Applied a CSS reset and base typography styles (font family, font size, line height, letter spacing)
	•	Built page layout using CSS Flexbox (header/navigation) and CSS Grid (card layouts for services and locations)
	•	Added decorative styling: borders, box-shadows, button styles, and hover/focus pseudo-classes
	•	Implemented responsive design with two breakpoints (768px for tablet, 480px for mobile), using relative units (rem, %) for spacing and sizing
Part 2 — Corrections (made at start of Part 3)
Feedback received: Updates made were not sufficiently informative; the changelog needed more detail and closer alignment with the assignment rubric and instructions.
Changes made:
	•	Re-reviewed the full Part 2 rubric and instructions in detail to confirm all required CSS techniques were present (base styles, typography, layout, decoration, pseudo-classes, and responsive media queries)
	•	Expanded and restructured this changelog to provide specific, itemised detail on every change made per part, rather than general summaries
	•	Verified the stylesheet was correctly linked and rendering on all 5 pages, and corrected the file path so style.css is located inside the css/ folder at the project root
	•	Confirmed responsive behaviour was working correctly at both the tablet and mobile breakpoints across all pages
Part 3 (Current Submission)
	•	Implemented JavaScript interactive elements:
	•	FAQ accordion on services.html (click to expand/collapse, only one section open at a time)
	•	Live search/filter bar on services.html that filters service cards by keyword as the user types
	•	Dynamically loaded “Tech Tip of the Day” on index.html that changes based on the current date
	•	Scroll-triggered fade-in animations using the Intersection Observer API
	•	Created a new gallery.html page with a custom-built image gallery and lightbox (click to enlarge, previous/next navigation, keyboard arrow and Escape key support)
	•	Replaced the static embedded maps on contact.html with interactive Leaflet.js maps for both business locations, including custom markers and popups
	•	Built full client-side JavaScript form validation for both the Enquiry form and the Contact form, including:
	•	Required field checks
	•	Email format validation
	•	South African phone number format validation
	•	Minimum character length checks
	•	Inline, descriptive error messages displayed next to invalid fields
	•	Enquiry form processes valid submissions and dynamically displays a response with service-specific pricing and estimated availability
	•	Contact form compiles validated input into a pre-filled mailto: link so the user can send their message as an email
	•	Implemented SEO best practices across all pages:
	•	Unique, descriptive title tags and meta descriptions for every page
	•	Logical heading hierarchy (H1, H2, H3)
	•	Descriptive alt text and file names for all images
	•	Clean, descriptive URLs (e.g. services.html, contact.html)
	•	Internal linking between all pages via the navigation menu and footer
	•	Created robots.txt to guide search engine crawlers
	•	Created sitemap.xml listing all pages with priority and change frequency
	•	Deployed the completed website using GitHub Pages
Technical Requirements
	•	Languages: HTML5, CSS3, JavaScript (ES6)
	•	Libraries: Leaflet.js 1.9.4 (interactive maps)
	•	Tools: Visual Studio Code, Git, GitHub
	•	Hosting/Deployment: GitHub Pages
	•	Browsers tested: Chrome, Edge
    References
Rosebank College. (2024). Web Development Study Guide. Cape Town: Rosebank College.
W3Schools. (2024). HTML Tutorial. Available at: https://www.w3schools.com [Accessed 2026].
W3Schools. (2024). JavaScript Tutorial. Available at: https://www.w3schools.com/js [Accessed 2026].
MDN Web Docs. (2024). Intersection Observer API. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 2026].
Leaflet. (2024). Leaflet — an open-source JavaScript library for interactive maps. Available at: https://leafletjs.com [Accessed 2026].
Google Developers. (2024). Search Engine Optimization (SEO) Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 2026].
AI Usage Disclosure
AI tooling (Claude, Anthropic) was used to assist with code structure, debugging guidance, and drafting written content for this project, in line with The IIE’s guidelines on AI usage. All AI-assisted output was reviewed, tested, and adapted by the student before submission.