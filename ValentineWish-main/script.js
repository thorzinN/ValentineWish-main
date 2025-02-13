document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    // Modern browsers require user interaction before playing audio
    // This tries to start playing as soon as possible
    document.addEventListener('click', function() {
        audio.play();
    }, { once: true });
}); 