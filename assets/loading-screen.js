function hideLoadingScreen() {
  document.getElementById("loading-image").classList.remove("animate__zoomInDown");
  document.getElementById("loading-image").classList.add("animate__bounceOutDown");
  setTimeout(() => { document.getElementById("loading-overlay").classList.add("animate__fadeOut"); }, 400);
  setTimeout(() => { document.getElementById("loading-overlay").style.display("none"); }, 2400);
}

// Add loading overlay to the page
function createLoadingScreen() {
  const loadingOverlayDiv = document.createElement('div');
  loadingOverlayDiv.id = "loading-overlay";
  loadingOverlayDiv.className = "loading-overlay animate__animated";

  const loadingImage = document.createElement('img');
  loadingImage.id = "loading-image";
  loadingImage.className = "loading-image animate__animated animate__zoomInDown";
  loadingImage.src = "https://peemima.github.io/lux-bank/assets/market-day-logo.png";

  loadingOverlayDiv.appendChild(loadingImage);
  document.body.insertBefore(loadingOverlayDiv, document.body.firstChild);
};

// Ensure the DOM is ready before inserting the loading screen
document.addEventListener("DOMContentLoaded", () => {
  createLoadingScreen();
  setTimeout(hideLoadingScreen, 1500);
});
