(function () {
  //
  // Variables
  //
  let prevEl = document.querySelector(".prev");
  let nextEl = document.querySelector(".next");
  let playIcon = document.querySelector(".play-icon");
  let pauseIcon = document.querySelector(".pause-icon");

  let slideIndex = 0;
  let slideTimer = 4000; // Number of milliseconds for next slide

  // Set play pause initial visibility
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";

  // Calling show slides initially to present the first slider
  continueSlider(slideIndex);

  //
  // Methods
  //
  // Shows a slide at a given index from the DOM elements with class name slide
  function continueSlider(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(continueSlider, slideTimer); // Change image every 2 seconds
  }

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
    var slides = document.getElementsByClassName("slide");

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

  // function prevSlide() {
  //   var slides = document.getElementsByClassName("slide");

  //   stopSlider();

  //   if (slideIndex == 1) {
  //     slideIndex = slides.length;
  //   } else {
  //     slideIndex = slideIndex - 1;
  //   }

  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }

  //   slides[slideIndex - 1].style.display = "block";
  // }

  // function nextSlide() {
  //   var slides = document.getElementsByClassName("slide");

  //   stopSlider();

  //   if (slideIndex == slides.length) {
  //     slideIndex = 1;
  //   } else {
  //     slideIndex = slideIndex + 1;
  //   }

  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }

  //   slides[slideIndex - 1].style.display = "block";
  // }

  //
  // Inits & Event Listeners
  //
  prevEl.addEventListener("click", function () {
    // prevSlide();
    nextPrevSlider(true);
    // nextPressed = true;
    // showSlides((slideIndex += -1));
  });
  nextEl.addEventListener("click", function () {
    // nextSlide();
    nextPrevSlider(false);
    // prevPressed = true;
    // showSlides((slideIndex += 1));
  });

  playIcon.addEventListener("click", () => {
    togglePausePlay();
  });

  pauseIcon.addEventListener("click", () => {
    togglePausePlay();
  });
})();
