document.getElementById('downloadCvBtn').addEventListener('click', function () {
    window.open('path-to-cv.pdf', '_blank');
});

document.getElementById('PrintButton').addEventListener('click', function () {
    window.print();
});

document.getElementById('GithubButton').addEventListener('click', function () {
    window.open('https://github.com/MartineStorm', '_blank');
});

document.getElementById('PortfolioButton').addEventListener('click', function () {
    window.open('path-to-your-portfolio.html', '_blank');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});

// Download CV Button
document.getElementById('downloadCvBtn').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'cv.pdf'; // Replace with the correct path to your CV file
});

// Print Button
document.getElementById('PrintButton').addEventListener('click', function (event) {
    event.preventDefault();
    window.print(); // Opens the print dialog for the current page
});

// GitHub Profile Button
document.getElementById('GithubButton').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'https://github.com/MartineStorm'; // Your GitHub profile link
});

// Portfolio Button
document.getElementById('PortfolioButton').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'portfolio.html'; // Make sure 'portfolio.html' exists in your project directory
});

