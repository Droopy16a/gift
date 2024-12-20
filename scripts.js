// function jiggle(v){
//     var cube = document.querySelector(".cube");
//     var divs = cube.querySelectorAll("div")

//     for (var i = 0; i < divs.length; i++){
//         var el = divs[i];
//         console.log(el);
//         if (el.className == "back"){
//             el.style.transform = `translateZ(${-100 * v}px) rotateY(180deg)`
//         } else if (el.className == "right"){
//             el.style.transform = `rotateY(-270deg) translateX(${100 * v}px)`
//         } else if (el.className == "left"){
//             el.style.transform = `rotateY(270deg) translateX(${-100 * v}px)`
//         } else if (el.className == "top"){
//             el.style.transform = `rotateX(-90deg) translateY(${-100 * v}px)`
//         } else if (el.className == "bottom"){
//             el.style.transform = `rotateX(90deg) translateY(${100 * v}px)`
//         } else{
//             el.style.transform = `translateZ(${100 * v}px)`
//         };
//         el.style.width = `${200 * v}px`;
//         el.style.height = `${200 * v}px`;
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const gift = document.getElementById('gift');
    var isjiggle = false
    console.log(gift)

    const requiredTaps = 20; // Total taps needed to open the gift
    let currentTaps = 0;

    // Function to get a random reward
    function getRandomReward() {
        const randomIndex = Math.floor(Math.random() * rewards.length);
        return rewards[randomIndex];
    }

    // Function to add and remove the jiggle class
    function triggerJiggle() {
        isjiggle = true
        gift.classList.add('jiggle');

        // Force reflow to restart the animation
        void gift.offsetWidth;

        // Remove the class after the animation duration (400ms)
        setTimeout(() => {
            isjiggle = false
            gift.classList.remove('jiggle');
        }, 700);
    }

    // Add click event listener to the gift
    gift.addEventListener('click', () => {
        if (gift.classList.contains('open')) return; // Stop if the gift is already open

        currentTaps = Math.min(currentTaps + 1, requiredTaps); // Prevent overflow

        // Trigger the jiggle animation
        isjiggle ? console.log("non") : triggerJiggle();

        // Check if taps are complete
        if (currentTaps >= requiredTaps) {
            gift.classList.remove('closed');
            gift.classList.add('open');

            const dessus = document.getElementsByClassName('cover')[0];
            dessus.style.transform = "translate(94px, -112px) rotate(45deg)"
        }
    });
});
