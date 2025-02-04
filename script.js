document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");
    const music = document.getElementById("music");

    window.openLetter = function() {
        envelope.style.display = "none";
        letter.style.display = "block";
        music.play();
    };

    window.closeLetter = function() {
        letter.style.display = "none";
        envelope.style.display = "flex";
        music.pause();
        music.currentTime = 0;
    };

    // Yes/No Button Interaction
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    // Change text and gif when Yes is clicked
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Being with you is my biggest blessing. I love you.";
        gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

        // Hide the No button
        noBtn.style.display = "none";

        // Navigate to tabs.html after 2 seconds
        setTimeout(() => {
            window.location.href = "tabs.html";
        }, 5000);
    });

    // Make No button move randomly on hover
    noBtn.addEventListener("mouseover", () => {
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        // Generate new random position
        const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
        const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

        // Apply new position
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
