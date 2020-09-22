(function () {
  // fadeOut, fadeIn jQuery Animation on every container
  $(".container").fadeOut("normal", function () {
    $(".container").fadeIn();
  });

  $(".slideshow-container").fadeOut("normal", function () {
    $(".slideshow-container").fadeIn();
  });
})();
