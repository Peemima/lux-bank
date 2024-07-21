function hideLoadingScreen() {
  document.getElementById("loading-image").classList.remove("animate__zoomInDown");
  document.getElementById("loading-image").classList.add("animate__bounceOutDown");
  setTimeout(() => { document.getElementById("loading-overlay").classList.add("animate__fadeOut"); }, 400);
}
setTimeout(hideLoadingScreen, 1500);

createLoadingScreen();

// Add loading overlay to the page
function createLoadingScreen() {
  const loadingOverlayDiv = document.createElement('div');
  loadingOverlayDiv.id = "loading-overlay";
  loadingOverlayDiv.className = "loading-overlay animate__animated";

  const loadingImage = document.createElement('img');
  loadingImage.id = "loading-image";
  loadingImage.className = "loading-image animate__animated animate__zoomInDown";
  loadingImage.src = "https://i.ibb.co/mzHvpVB/Market-Day-Logo-transparent.pngpng";

  loadingOverlayDiv.appendChild(loadingImage);
  document.body.insertBefore(loadingOverlayDiv, document.body.firstChild);
};
