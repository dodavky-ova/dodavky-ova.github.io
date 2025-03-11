

  $(document).ready(function(){
    // Add a click event listener to the image element
    $("img").click(function(){
      var clickedImage = $(this);
      var imageSrc = clickedImage.attr("src");

      // Exclude the image with src "images/logonove2.png"
      if (imageSrc === "images/logonove2.png") {
        return; // Do nothing if the image is excluded
      }

      var images = $("img"); // Get all images on the page
      var currentIndex = images.index(this); // Get the index of the clicked image
      var totalImages = images.length;

      // Create a new container element
      var fullscreenContainer = $("<div>");
      fullscreenContainer.css({
        "position": "fixed",
        "z-index": "10000",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "text-align": "center"
      });

      // Create a new image element
      var fullscreenImage = $("<img>");
      fullscreenImage.attr("src", imageSrc);
      fullscreenImage.css({
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

      // Create a close button
      var closeButton = $("<button>");
      closeButton.text("X");
      closeButton.css({
        "position": "absolute",
        "top": "40px",
        "right": "10px",
        "border": "none",
        "font-size": "50px",
        "cursor": "pointer",
        "background": "transparent",
        "color": "white",
        "background": "rgba(0, 0, 0, 0.5)",
        "background-size": "cover",
        "background-position": "center",
        "border-radius": "50%",
        "width": "60px",
        "height": "60px"
        
      });

      // Adjust the button position based on screen size (below 800px)
  function adjustButtonPosition() {
    if ($(window).width() < 450) {
      closeButton.css("top", "30%");  // Move button lower at 40% top
    } else if ($(window).width() < 950){
      closeButton.css("top", "18%");
    }
    else {
      closeButton.css("top", "10px");  // Default position for larger screens
    }
  }

  // Call the function once when the page loads
  adjustButtonPosition();

  // Update position on window resize
  $(window).resize(function() {
    adjustButtonPosition();
  });

      // Add the close button event listener
      closeButton.click(function(){
        fullscreenContainer.remove();
      });

      // Create left and right navigation buttons
      var prevButton = $("<button>");
      prevButton.text("<");
      prevButton.css({
        "position": "absolute",
        "top": "50%",
        "left": "5px",
        "font-size": "70px",
        "color": "white",
        "background": "transparent",
        "border": "none",
        "cursor": "pointer",
        "transform": "translateY(-50%)",
      });

      var nextButton = $("<button>");
      nextButton.text(">");
      nextButton.css({
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

      // Add event listeners to navigate through images
      prevButton.click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        var prevImageSrc = $(images[currentIndex]).attr("src");
        if (prevImageSrc === "images/logonove2.png") {
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        }
        fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
      });

      nextButton.click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        var nextImageSrc = $(images[currentIndex]).attr("src");
        if (nextImageSrc === "images/logonove2.png") {
          currentIndex = (currentIndex + 1) % totalImages;
        }
        fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
      });

      // Add the image, buttons, and close button to the container
      fullscreenContainer.append(fullscreenImage);
      fullscreenContainer.append(closeButton);
      fullscreenContainer.append(prevButton); // Add left button
      fullscreenContainer.append(nextButton); // Add right button

      // Add the container to the body
      fullscreenContainer.appendTo("body");

      // Handle keyboard navigation
      $(document).keydown(function(e) {
        if (e.key === "ArrowRight") {
          // Go to next image
          currentIndex = (currentIndex + 1) % totalImages;
          var nextImageSrc = $(images[currentIndex]).attr("src");
          if (nextImageSrc === "images/logonove2.png") {
            currentIndex = (currentIndex + 1) % totalImages;
          }
          fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
        } else if (e.key === "ArrowLeft") {
          // Go to previous image
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          var prevImageSrc = $(images[currentIndex]).attr("src");
          if (prevImageSrc === "images/logonove2.png") {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          }
          fullscreenImage.attr("src", $(images[currentIndex]).attr("src"));
        } else if (e.key === "Escape") {
          // Close the fullscreen view on Escape key
          fullscreenContainer.remove();
        }
      });
    });
  });

    

  function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-nav-links');
      }




    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0W4RVJ3PE8');
