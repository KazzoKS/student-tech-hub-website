# student-tech-hub-website
## Changelog
### Part 1 updates
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
### Part 2 Updates
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
### Part 3 updates
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
