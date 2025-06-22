🌤️ SkyVue - Modern Weather Forecasting Website
A beautiful, responsive weather forecasting website built with pure HTML, CSS, and JavaScript. Featuring modern glassmorphism design, smooth animations, and an intuitive user interface to deliver real-time weather updates.

✨ Features
🎨 Visual Design
Glassmorphism UI with frosted glass effects and backdrop filters

Animated gradient backgrounds with dynamic color shifts

Floating particle animations for atmospheric ambiance

Smooth micro-interactions and hover effects

Dynamic theme changes based on weather conditions

📱 User Experience
Fully responsive: works seamlessly on desktop, tablet, and mobile

Real-time city lookup with intuitive search interface

5-day weather forecast with detailed information

Comprehensive weather metrics: temperature, humidity, wind, pressure, visibility

Geolocation support for automatic location detection

⚡ Interactive Elements
Smooth CSS keyframe animations

Ripple effects on button clicks

Animated spinners during data loading

User-friendly error handling

Keyboard navigation support

🚀 Live Demo
👉 Live Demo

🛠️ Technologies Used
HTML5 — Semantic markup

CSS3 — Advanced styling with:

Flexbox & CSS Grid layouts

Backdrop filters & Glassmorphism

Pure CSS animations & transitions

Custom properties (CSS variables)

Responsive media queries

Vanilla JavaScript (ES6+) — Interactive functionality:

DOM manipulation

Event handling

Geolocation API

(Optional) Local storage

🎯 Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge)

Text editor or IDE (VSCode recommended)

Optional: local server for development

Installation
bash
Copy
Edit
git clone https://github.com/KondamPravalikaReddy/SkyVue.git
cd weatherflow

🔧 Weather API Integration
Currently, the app uses mock data. To fetch live weather:

Sign up at OpenWeatherMap and get an API key.

Update your JS configuration:

javascript
Copy
Edit
const API_KEY = 'your_actual_api_key_here';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        showError();
    }
}
Customize colors, animations, and UI via CSS variables.

🌟 Accessibility & Performance
Semantic HTML5 for screen readers

Full keyboard navigation support

High contrast for readability

Lightweight codebase (no external libraries)

Optimized CSS animations for 60fps performance

🤝 Contributing
Contributions are welcome!

Reporting Issues
Provide browser version, steps to reproduce, screenshots, and expected behavior.

🐛 Known Issues
Uses mock data without real API key

Geolocation requires HTTPS in production

Performance may vary on low-end devices

📄 License
This project is licensed under the MIT License. See LICENSE for more details.

👨‍💻 Author
Kondam Pravalika Reddy

GitHub:https://github.com/KondamPravalikaReddy

LinkedIn:https://www.linkedin.com/in/k-pravalika-reddy-8b1638279/

Email: Kpravalika426@gmail.com

🙏 Acknowledgments
Weather icons inspired by modern apps

Glassmorphism design trends

Community CSS animation techniques

OpenWeatherMap API for real-time data

⭐ If you like this project, please consider giving it a ⭐ on GitHub!

Coded with ❤️ and lots of debugging 🔧 — © 2025 SykVue.
