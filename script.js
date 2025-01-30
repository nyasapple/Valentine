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
});
