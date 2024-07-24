function showPopup(popupDisplay, popupTitle, closeButtonDisplay, messageHtml) {
  // 1. Create the popup elements
  const popupOverlay = document.createElement('div');
  popupOverlay.id = "popup-overlay";
  popupOverlay.style.display = popupDisplay;

  const popup = document.createElement('div');
  popup.id = "popup";

  const popupHeading = document.createElement('div');
  popupHeading.id = "popup-heading";

  const popupHeadingText = document.createElement('div');
  popupHeadingText.id = "popup-heading-text";
  popupHeadingText.innerText = popupTitle;

  const popupCloseButton = document.createElement('div');
  popupCloseButton.id = "popup-close-button";
  popupCloseButton.style.display = closeButtonDisplay;
  popupCloseButton.innerHTML = '<img width="25px" height="25px" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40px\' viewbox=\'0 0 40 40\'%3E%3Cpath d=\'M 10,10 L 30,30 M 30,10 L 10,30\' stroke=\'black\' stroke-width=\'4\' stroke-linecap=\'butt\' /%3E%3C/svg%3E">';

  const popupContent = document.createElement('div');
  popupContent.id = "popup-content";
  popupContent.innerHTML = messageHtml;

  // 2. Nest the elements
  popupHeading.appendChild(popupHeadingText);
  popupHeading.appendChild(popupCloseButton);
  popup.appendChild(popupHeading);
  popup.appendChild(popupContent);
  popupOverlay.appendChild(popup);

  // 3. Add the popup to the body (at the beginning)
  document.body.insertBefore(popupOverlay, document.body.firstChild);

  // 4. Add event listener for close button (after insertion)
  popupCloseButton.addEventListener("click", function() {
    popupOverlay.style.display = "none";
  });
}
