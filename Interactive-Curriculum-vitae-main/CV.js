document.addEventListener("DOMContentLoaded", function() {
    // Function to set the width of progress bars
    function setProgressBarWidth() {
        const progressBars = document.querySelectorAll('.progress');

        progressBars.forEach(progressBar => {
            const skillLevel = progressBar.getAttribute('data-skill');
            if (skillLevel) {
                progressBar.style.width = skillLevel; // Set the width to match the skill level
            } else {
                console.warn('Missing data-skill attribute in:', progressBar);
            }
        });
    }

    setProgressBarWidth(); // Call the function to apply the changes

    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Portfolio button functionality
    const portfolioButton = document.getElementById('PortfolioButton');
    portfolioButton.addEventListener('click', function() {
        window.location.href = 'Portfolio.html';
    });

    // GitHub button functionality
    const githubButton = document.getElementById('GithubButton');
    githubButton.addEventListener('click', function() {
        window.open('https://github.com/MartineStorm', '_blank');
    });

    // Top button setup
    const topBtn = document.createElement('button');
    topBtn.id = 'topBtn';
    topBtn.innerHTML = 'Top';
    document.body.appendChild(topBtn);

    topBtn.style.display = 'none'; // Initially hidden

    topBtn.addEventListener('mouseenter', function() {
        topBtn.style.backgroundColor = '#d988a4';
    });

    topBtn.addEventListener('mouseleave', function() {
        topBtn.style.backgroundColor = '#f2a1c2';
    });

    topBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Bottom button setup
    const bottomBtn = document.createElement('button');
    bottomBtn.id = 'bottomBtn';
    bottomBtn.innerHTML = 'Bottom';
    document.body.appendChild(bottomBtn);

    bottomBtn.style.display = 'none'; // Initially hidden

    bottomBtn.addEventListener('mouseenter', function() {
        bottomBtn.style.backgroundColor = '#d988a4';
    });

    bottomBtn.addEventListener('mouseleave', function() {
        bottomBtn.style.backgroundColor = '#f2a1c2';
    });

    bottomBtn.addEventListener('click', function() {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    });

    // Scroll functionality for showing/hiding top and bottom buttons
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = 'block'; // Show top button
        } else {
            topBtn.style.display = 'none'; // Hide top button
        }

        if ((window.innerHeight + window.scrollY) < document.body.scrollHeight - 20) {
            bottomBtn.style.display = 'block'; // Show bottom button
        } else {
            bottomBtn.style.display = 'none'; // Hide bottom button
        }
    };

    // Event listener to generate the PDF
    document.getElementById("downloadCvBtn").addEventListener("click", function() {
        var element = document.getElementById("cv-content"); // Get the CV content
        html2pdf(element, {
            margin: 1,
            filename: 'Martine_Storm_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    });
});
