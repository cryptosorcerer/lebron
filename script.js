function placeCows() {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    document.querySelectorAll('.cow').forEach(function(cow) {
        var randomX = Math.floor(Math.random() * (viewportWidth - 200));
        var randomY = Math.floor(Math.random() * (viewportHeight - 200));

        cow.style.position = 'absolute';
        cow.style.left = randomX + 'px';
        cow.style.top = randomY + 'px';
    });
}

window.onload = placeCows;
window.onresize = placeCows; // Reposition cows when window is resized
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('textContainer');
    var containerWidth = window.innerWidth;
    var containerHeight = window.innerHeight;

    for (var i = 0; i < 50; i++) { // Adjust the number of texts as needed
        var text = document.createElement('div');
        text.className = 'textItem';
        text.textContent = '$LeBronAliens2024';
        var x = Math.random() * containerWidth;
        var y = Math.random() * containerHeight;
        var rotation = Math.random() * 360;

        text.style.left = x + 'px';
        text.style.top = y + 'px';
        text.style.transform = 'rotate(' + rotation + 'deg)';

        container.appendChild(text);
    }
});
