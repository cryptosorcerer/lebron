function redirectTo(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    const mysticText = document.getElementById('m'); // Replace with your actual element ID for $MYSTIC
    const imageElement = document.getElementById('q'); // Replace with your actual image element ID
    const buttons = document.getElementById('b');

    let mouseMoveTimeout;

    document.addEventListener('mousemove', function() {
        mysticText.classList.add('vibrating');
        imageElement.classList.add('vibrating');
        buttons.classList.add('vibrating');

        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            mysticText.classList.remove('vibrating');
            imageElement.classList.remove('vibrating');
            buttons.classList.remove('vibrating');
        }, 100); // Time in milliseconds; adjust as necessary
    });

    // ... your existing JavaScript code ...
});



