$(document).ready(function(){

  // Define excluded images in one place
  var excludedImages = ["images/logonove2.png", "images/phone.png"];

  // Helper function to check if image is excluded
  function isExcluded(src) {
    return excludedImages.includes(src);
  }

  $("img").click(function(){
    var clickedImage = $(this);
    var imageSrc = clickedImage.attr("src");

    // Exclude
    if (isExcluded(imageSrc)) {
      return; // Skip
    }

    var images = $("img");
    var currentIndex = images.index(this);
    var totalImages = images.length;

    // Fullscreen container setup
    var fullscreenContainer = $("<div>").css({
      "position": "fixed",
      "z-index": "10000",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "background-color": "rgba(0, 0, 0, 0.5)",
      "text-align": "center"
    });

    // Fullscreen image setup
    var fullscreenImage = $("<img>").attr("src", imageSrc).css({
      "max-width": "99%", 
      "max-height": "99%", 
      "width": "auto", 
      "height": "auto", 
      "margin": "auto", 
      "position": "absolute",
      "top": "0",
      "left": "0",
      "bottom": "0",
      "right": "0",
      "cursor": "zoom-out"
    });

    // Close button setup
    var closeButton = $("<button>").text("X").css({
      "position": "absolute",
      "top": "40px",
      "right": "10px",
      "border": "none",
      "font-size": "50px",
      "cursor": "pointer",
      "background": "rgba(0, 0, 0, 0.5)",
      "border-radius": "50%",
      "width": "60px",
      "height": "60px",
      "color": "white"
    });

    function adjustButtonPosition() {
      if ($(window).width() < 450) {
        closeButton.css("top", "30%");
      } else if ($(window).width() < 950){
        closeButton.css("top", "18%");
      }
      else {
        closeButton.css("top", "10px");
      }
    }
    adjustButtonPosition();
    $(window).resize(function() {
      adjustButtonPosition();
    });

    closeButton.click(function(){
      fullscreenContainer.remove();
    });

    // Prev & Next buttons
    var prevButton = $("<button>").text("<").css({
      "position": "absolute",
      "top": "50%",
      "left": "5px",
      "font-size": "70px",
      "color": "white",
      "background": "transparent",
      "border": "none",
      "cursor": "pointer",
      "transform": "translateY(-50%)"
    });

    var nextButton = $("<button>").text(">").css({
      "position": "absolute",
      "top": "50%",
      "right": "5px",
      "font-size": "70px",
      "color": "white",
      "background": "transparent",
      "border": "none",
      "cursor": "pointer",
      "transform": "translateY(-50%)"
    });

    // Navigation functions
    prevButton.click(function() {
      do {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        var prevImageSrc = $(images[currentIndex]).attr("src");
      } while (isExcluded(prevImageSrc));
      fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
    });

    nextButton.click(function() {
      do {
        currentIndex = (currentIndex + 1) % totalImages;
        var nextImageSrc = $(images[currentIndex]).attr("src");
      } while (isExcluded(nextImageSrc));
      fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
    });

    // Add to DOM
    fullscreenContainer.append(fullscreenImage, closeButton, prevButton, nextButton).appendTo("body");

    // Keyboard navigation
    $(document).keydown(function(e) {
      if (e.key === "ArrowRight") {
        do {
          currentIndex = (currentIndex + 1) % totalImages;
          var nextImageSrc = $(images[currentIndex]).attr("src");
        } while (isExcluded(nextImageSrc));
        fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
      } else if (e.key === "ArrowLeft") {
        do {
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          var prevImageSrc = $(images[currentIndex]).attr("src");
        } while (isExcluded(prevImageSrc));
        fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
      } else if (e.key === "Escape") {
        fullscreenContainer.remove();
      }
    });

  });
});


function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show-nav-links');
    }