(function () {
  let mobileNavigationIcon = document.querySelector(".mobile-navigation-icon");

  function toggleMobileNavLinks() {
    var linksEl = document.querySelector(".mobile-navigation-links");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }

  //
  // Inits & Event Listeners
  //
  mobileNavigationIcon.addEventListener("click", toggleMobileNavLinks);
})();
