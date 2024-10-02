window.addEventListener('scroll', function() {
    const projectSection = document.querySelector('#projects');
    const projectProgress = document.querySelector('#projectProgress');
    const position = projectSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        projectProgress.computedStyleMap.width = '70%'; /* Edit here to fill progress bar */
    }
});