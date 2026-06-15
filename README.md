# InAmigos Foundation Website Redesign

[![Web Developer Internship](https://img.shields.io/badge/Internship-Web%20Developer-blueviolet?style=for-the-badge)](https://github.com/iamhriturajsaha/WEB-DEVELOPER-INTERNSHIP)
[![Technologies Used](https://img.shields.io/badge/Technologies-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange?style=for-the-badge)](#technologies-used)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, highly responsive, and premium website redesign for the **InAmigos Foundation** NGO. This project was developed as part of the **Web Developer Internship** (Duration: 05/06/2026 - 19/06/2026) to elevate the foundation's digital presence, user engagement, and visual aesthetics.

---

## 🌟 Key Features

*   **Premium Visual Aesthetics**: Uses a sleek dark theme with ambient glowing background orbs, glassmorphic panels (`backdrop-filter`), and customized gradients.
*   **Dual-Language Interactive Splash Screen**: An elegant welcome screen featuring a fade-in slideshow of NGO initiatives and a smooth translation animation switching between English ("InAmigos Foundation") and Hindi ("इनअमिगोस फाउंडेशन").
*   **Scroll-Reveal Animations**: Features smooth element reveal effects as the user scrolls down, powered by the JavaScript `IntersectionObserver` API.
*   **Dynamic Counter Animations**: Displays growth and reach metrics (e.g., *10k+ Lives Touched*, *5000+ Active Volunteers*) that increment dynamically when scrolled into view.
*   **Interactive Donation Flow**: A specialized donation page (`donate.html`) supporting preset quick-selection amounts (₹500, ₹1500, ₹5000), custom amount inputs, and fund designation options.
*   **Interactive Volunteer Registration**: A fully responsive volunteer application form (`volunteer.html`) supporting multi-area interests corresponding to NGO projects.
*   **Page Transitions**: Implemented seamless custom CSS/JS page fade-out and fade-in animations on navigation clicks for an app-like browsing experience.

---

## 📁 Repository Structure

The repository consists of analytical reports at the root and the complete front-end code implementation under the `InAmigos Foundation Website Redesign` directory.

```text
├── NGO Website Feature Highlight Report.pdf      # Detailed report highlighting core features and layouts
├── Website Improvement Analysis Report.pdf       # Analytical report discussing UX/UI flaws and redesign steps
└── InAmigos Foundation Website Redesign/         # Source code of the web application
    ├── index.html                               # Splash Screen & Entry portal
    ├── home.html                                # Redesigned landing page with sections (Home, Mission, Initiatives, Impact)
    ├── donate.html                              # Donation & payment gateway simulator
    ├── volunteer.html                           # Volunteer registration form
    ├── project-seva.html                        # Project Detail: Hunger Relief
    ├── project-bachpanshala.html                # Project Detail: Digital Literacy & Education
    ├── project-udaan.html                       # Project Detail: Women's Empowerment
    ├── project-prakriti.html                    # Project Detail: Environment & Afforestation
    ├── project-jeev.html                        # Project Detail: Animal Welfare & Rescue
    ├── project-vikas.html                       # Project Detail: Youth Employability & Internships
    ├── styles.css                               # Comprehensive stylesheet containing core design system variables, grids, and animations
    ├── script.js                                # Core JavaScript handling scroll reveals, counters, transitions, and menus
    └── images/                                  # Graphic assets and initiative photos
```

---

## 🛠️ Technologies Used

*   **HTML5**: Semantic elements (header, nav, section, footer) for SEO and layout structure.
*   **CSS3 (Vanilla)**:
    *   **CSS Variables**: Core theme tokens for colors, shadows, and fonts (Outfit).
    *   **Layout Engines**: CSS Flexbox and CSS Grid for high-performance responsive behavior.
    *   **Aesthetics**: Glassmorphism (`backdrop-filter: blur`), custom gradients, and glowing ambient shapes.
    *   **Animations**: Custom transition keyframes for page fades and button hover glows.
*   **JavaScript (ES6+)**:
    *   **DOM Manipulation**: Interactive menu toggles and page transition hooks.
    *   **IntersectionObserver API**: Heavy performance optimization for scroll-reveal animations and counters.
*   **Fonts**: *Outfit* from Google Fonts.

---

## 📖 Detailed Page Implementations

<details>
<summary>1. Welcome Splash Screen (<code>index.html</code>)</summary>
Provides a dramatic entrance with an auto-advancing background slideshow displaying high-quality photographs of actual foundation projects, layered under a dark blur. The central headings alternate smoothly between English and Hindi.
</details>

<details>
<summary>2. Main Portal (<code>home.html</code>)</summary>
Serves as the foundation's landing hub. Displays a premium navbar that turns semi-opaque on scroll, a bold hero header, an overview of the NGO, a responsive bento grid showcasing the 6 core pillars, animated stats, and prominent Calls to Action (CTAs).
</details>

<details>
<summary>3. Initiatives & Pillars (<code>project-*.html</code>)</summary>
Individual detail pages for each of InAmigos Foundation's core programs:
*   **Project SEVA**: Hunger relief distributing food and clothes to daily wage workers.
*   **Project Bachpanshala**: Education and digital training for underprivileged children.
*   **Project Udaan**: Skill training and financial independence for women.
*   **Project Prakriti**: Tree plantation drives and environmental advocacy.
*   **Project Jeev**: Stray animal rescue, shelter, and medical care.
*   **Project Vikas**: Internships and skill enhancement for youth.
</details>

<details>
<summary>4. Interaction Forms (<code>donate.html</code> & <code>volunteer.html</code>)</summary>
Beautifully designed container forms using modern, glassmorphic fields. The donation page pre-fills payment options according to selected impact categories (e.g. sponsor education, plant trees) and has a built-in custom calculator.
</details>

---

## 🚀 How to Run Locally

Since this is a client-side web application built with vanilla technologies, no package installations are required.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/iamhriturajsaha/WEB-DEVELOPER-INTERNSHIP.git
    ```
2.  **Navigate to the Code Directory**:
    ```bash
    cd "WEB-DEVELOPER-INTERNSHIP/InAmigos Foundation Website Redesign"
    ```
3.  **Open in Browser**:
    *   Double-click the `index.html` file in your file explorer, or
    *   Run using a local dev server extension (like **Live Server** in VS Code) for the best experience.

---

## 📝 Analysis & Documentation

Two detailed analysis reports are available in the repository root to outline the design choices and improvements:
1.  [**NGO Website Feature Highlight Report.pdf**](./NGO%20Website%20Feature%20Highlight%20Report.pdf): Outlines layout structures, accessibility features, and responsiveness considerations.
2.  [**Website Improvement Analysis Report.pdf**](./Website%20Improvement%20Analysis%20Report.pdf): Details original web issues (poor visual hierarchy, lack of visual breathing room, lack of responsive grids) and discusses how this redesign solves each issue.
