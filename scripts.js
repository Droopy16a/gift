document.addEventListener('DOMContentLoaded', () => {
    const gift = document.getElementById('gift');
    gift.hidden = false;

    setTimeout(() => {
        gift.style.transform = "scale(1)";
    }, 100); // Add slight delay for initial scale animation

    const requiredTaps = 20; // Total taps needed to open the gift
    let currentTaps = 0;
    let animationTimeout = null; // Store timeout for managing animation

    // Function to add and remove the zoom-jiggle class
    function triggerZoomJiggle() {
        if (animationTimeout) return; // Avoid re-triggering if already animating

        gift.classList.add('zoom-jiggle');
        animationTimeout = setTimeout(() => {
            gift.classList.remove('zoom-jiggle');
            animationTimeout = null;
        }, 500); // Match the animation duration (500ms)
    }

    // Add click event listener to the gift
    gift.addEventListener('click', () => {
        if (gift.classList.contains('open')) return; // Stop if the gift is already open

        currentTaps = Math.min(currentTaps + 1, requiredTaps);

        // Trigger the zoom and jiggle animation
        triggerZoomJiggle();

        // Check if taps are complete
        if (currentTaps >= requiredTaps) {
            gift.classList.remove('closed');
            gift.classList.add('open');

            const dessus = document.getElementsByClassName('cover')[0];
            dessus.style.transform = "translate(94px, -112px) rotate(45deg)";
        }
    });
});
