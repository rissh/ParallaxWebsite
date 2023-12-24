// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements with specific IDs
  let text = document.getElementById("text");
  let hill1 = document.getElementById("hill1");
  let hill4 = document.getElementById("hill4");
  let hill5 = document.getElementById("hill5");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Get the current scroll position
    let value = window.scrollY;

    // Apply parallax effect to the 'text' element
    text.style.marginTop = value * 2.5 + "px";

    // Apply parallax effect to the 'hill5' element by changing its left position
    hill5.style.left = value * 1.5 + "px";

    // Apply parallax effect to the 'hill4' element by changing its left position
    hill4.style.left = value * -1.5 + "px";

    // Apply parallax effect to the 'hill1' element by changing its top position
    hill1.style.top = value * 1 + "px";
  });
});
