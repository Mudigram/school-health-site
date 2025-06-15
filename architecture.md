# 🏥 School Health Center Website - Architecture

This document outlines the folder and file structure, purpose of each part, and how the project will be organized and function using only HTML, CSS, and JavaScript.

---

## 📁 Folder & File Structure

---

## 🧠 Purpose of Each Part

### 🔹 HTML Pages

- `index.html` → Homepage (welcome section, intro, navigation)
- `doctors.html` → Doctor availability, schedule, and info cards
- `tips.html` → Health tips and medical guidelines
- `contact.html` → Contact info, map, or a mock contact form

### 🔹 CSS Folder

- `styles.css` → Custom styles, layout, dark mode, responsiveness

### 🔹 JavaScript Folder

- `main.js` → Handles:
  - Dark mode toggle
  - DOM interactivity (modals, filters, greetings)
  - Scroll behavior
  - Toggle sections (health tips, doctor filters)

### 🔹 Assets Folder

- `images/` → Profile photos, logos, banners
- `icons/` → SVG/PNG icons for UI

### 🔹 Data Folder

- `doctors.js` → Stores a list of doctors and their info:

```js
const doctors = [
  {
    name: "Dr. Ahmed",
    specialty: "General Practitioner",
    availability: "Mon - Fri, 9am - 2pm",
    photo: "./assets/images/dr-ahmed.jpg",
  },
  // more doctors
];
```
