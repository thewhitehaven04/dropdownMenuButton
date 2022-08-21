/**
 * Creates a button than reveals menu items on hover
 * @param {String} menuName button name 
 * @param {HTMLElement} elementsToOpenContainer to open upon hover 
 * @param {String[]} [buttonStylingArray] an array of CSS class names to apply to the button
 * @param {String} [animationClass] animation class to apply upon either mouseenter event 
 * @returns {HTMLButtonElement} button 
 */
export const dropdownMenu = function dropdown(menuName, elementsToOpenContainer, buttonStylingArray = [], animationClass = undefined) {
  const button = document.createElement('button');
  button.textContent = menuName;
  button.classList.add(...buttonStylingArray);

  button.addEventListener('mouseleave', () => {
    elementsToOpenContainer.style.display = 'none';
    if (animationClass !== undefined) {
      elementsToOpenContainer.classList.remove(animationClass);
    };
  });

  const displayState = window.getComputedStyle(elementsToOpenContainer).display;
  button.addEventListener('mouseenter', () => {
    elementsToOpenContainer.style.display = displayState;
    if (animationClass !== undefined) {
      elementsToOpenContainer.classList.add(animationClass);
    };
  });

  // hide elements by default so when a user enters the page, the menu is hidden
  elementsToOpenContainer.style.display = 'none';
  return button;
}