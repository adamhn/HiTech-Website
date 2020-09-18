(function () {
  //
  // Variables
  //
  let prevEl = document.querySelector(".prev");
  let nextEl = document.querySelector(".next");
  let playIcon = document.querySelector(".play-icon");
  let pauseIcon = document.querySelector(".pause-icon");
  let slides = document.getElementsByClassName("slide");

  let slideIndex = 0;
  let slideTimer = 4000; // Number of milliseconds for next slide

  init();

  //
  // Methods
  //
  function init() {
    // Initial visibility for play pause icons
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";

    // Calling show slides initially to present the first slider
    continueSlider();
    randomiseSkillsProgress();
  }

  // Shows a slide at a given index from the DOM elements with class name slide
  function continueSlider() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++; // Increment to display new slider

    // Reset if we reached the last slide
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(continueSlider, slideTimer); // Change image every 2 seconds
  }

  // Toggles between pause and play icon visibility
  function togglePausePlay() {
    if (playIcon.style.display === "block") {
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
      continueSlider(slideIndex - 1);
    } else if (pauseIcon.style.display === "block") {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
      stopSlider();
    }
  }

  function stopSlider() {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";

    clearTimeout(timer);
    timer = 0;
  }

  // +1 for next slider, -1 for previous slider
  function nextPrevSlider(isPrev) {
    stopSlider();

    // Checks to see wether we pressed the prev or next slider
    if (isPrev) {
      // controls the flow of slider index, so if we want prev and we reached 1 then we start with 3
      // this to make sure we can toggle back and forth endlessly
      slideIndex == 1
        ? (slideIndex = slides.length)
        : (slideIndex = slideIndex - 1);
    } else {
      slideIndex == slides.length
        ? (slideIndex = 1)
        : (slideIndex = slideIndex + 1);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  function randomiseSkillsProgress() {
    let progresses = document.querySelectorAll(".progress");
    progresses.forEach((progress) => {
      let randomNumber = Math.floor(Math.random() * (101 - 60)) + 60;

      progress.textContent = randomNumber + "%";
      progress.style.width = randomNumber + "%";
    });
  }

  //
  // Inits & Event Listeners
  //
  prevEl.addEventListener("click", () => {
    nextPrevSlider(true);
  });

  nextEl.addEventListener("click", () => {
    nextPrevSlider(false);
  });

  playIcon.addEventListener("click", () => {
    togglePausePlay();
  });

  pauseIcon.addEventListener("click", () => {
    togglePausePlay();
  });
})();
