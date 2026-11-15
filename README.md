# Shruti Gupta — Portfolio

A modern, multi-page personal portfolio built with pure HTML, CSS and vanilla JavaScript.

**Live:** [github.com/ranaji114/Shruti-](https://github.com/ranaji114/Shruti-)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — Hero, Marquee, Stats, Featured Project |
| `about.html` | About — Story, Education Timeline, Strengths |
| `skills.html` | Skills — Stamp Badges, Certification, Currently Learning |
| `projects.html` | Projects — Masonry Cards with Hover Reveal |
| `contact.html` | Contact — Split Layout + EmailJS Form |

## Structure

```
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   ├── global.css
│   ├── home.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   └── contact.css
├── js/
│   ├── cursor.js
│   ├── reveal.js
│   ├── nav.js
│   └── contact.js
└── assets/
    ├── shruti.jpg
    ├── shruti2.jpg
    └── img.jpg
```

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JS** — No frameworks, no build tools
- **EmailJS** — For the working contact form

## Features

- Custom gold cursor with magnetic pull
- SVG ink underline animation on hero name
- Floating marigold petals (CSS-only)
- Smooth page transitions (fade)
- IntersectionObserver scroll reveals
- Animated vertical education timeline
- Polaroid-style strengths wall
- Rubber stamp skill badges
- Project cards with hover reveal overlay
- Infinite marquee strips (pause on hover)
- Scroll progress bar
- Working contact form via EmailJS
- Fully responsive + mobile menu drawer
- Grain texture overlay (film feel)

## Setup EmailJS (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service and Email Template
3. In `contact.html`, replace:
   - `YOUR_PUBLIC_KEY` → your EmailJS public key
   - `YOUR_SERVICE_ID` → your service ID
   - `YOUR_TEMPLATE_ID` → your template ID
4. Uncomment the `emailjs.init(...)` and `emailjs.sendForm(...)` lines

---

*Built with ❤️ from Prayagraj — Where Visions Blossom ✦*
