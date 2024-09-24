function hideLoadingScreen() {
  document.getElementById("loading-image").classList.remove("animate__jackInTheBox");
  document.getElementById("loading-image").classList.add("animate__zoomOut");
  setTimeout(() => { 
    document.getElementById("loading-overlay").classList.add("animate__fadeOut"); 
  }, 400);
  setTimeout(() => { 
    // Set the display property to 'none'
    document.getElementById("loading-overlay").style.display = "none"; 
  }, 1400);
}

// Add loading overlay to the page
function createLoadingScreen() {
  const loadingOverlayDiv = document.createElement('div');
  loadingOverlayDiv.id = "loading-overlay";
  loadingOverlayDiv.className = "loading-overlay animate__animated";

  const loadingImage = document.createElement('img');
  loadingImage.id = "loading-image";
  loadingImage.className = "loading-image animate__animated animate__jackInTheBox";
  loadingImage.src = "https://peemima.github.io/lux-bank/assets/fireyhills.png";

  loadingOverlayDiv.appendChild(loadingImage);
  // document.body.insertBefore(loadingOverlayDiv, document.body.firstChild);
  document.body.appendChild(loadingOverlayDiv);
};

// Ensure the DOM is ready before inserting the loading screen
  createLoadingScreen();
  setTimeout(hideLoadingScreen, 1500);
