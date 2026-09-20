// 1. Color Switcher Logic
const button = document.getElementById('colorBtn');
const heading = document.getElementById('heading');

const colors = [
    '#FF5733', // Coral
    '#28A745', // Green
    '#007BFF', // Blue
    '#E83E8C', // Pink
    '#FD7E14', // Orange
    '#6F42C1', // Purple
    '#20C997'  // Teal
];

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    heading.style.color = colors[randomIndex];
});

// 2. Dynamic Footer Year Configuration
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
