document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 JavaScript is running!");

  const groupBuilding = document.querySelector(".group-building");
  const circles = document.querySelectorAll(".circle");

  // Initially hide circles
  circles.forEach((circle) => {
    circle.style.opacity = "0";
    circle.style.transform = "scale(0.8)";
    circle.style.transition =
      "opacity 0.5s ease-in-out, transform 0.3s ease-in-out"; // Shortened transition for scaling

    // Ensure circles are clickable
    circle.style.pointerEvents = "auto";
    circle.style.cursor = "pointer";
  });

  // Toggle circle visibility when clicking the building
  groupBuilding.addEventListener("click", () => {
    circles.forEach((circle) => {
      const isVisible = circle.style.opacity === "1";
      circle.style.opacity = isVisible ? "0" : "1";
      circle.style.transform = isVisible ? "scale(0.8)" : "scale(1)";
    });
  });

  // Add event listeners to each circle for clicking and hovering
  circles.forEach((circle, index) => {
    // Hover effect for scaling
    circle.addEventListener("mouseenter", () => {
      circle.style.transform = "scale(1.05)"; // Slightly increase size on hover
    });

    circle.addEventListener("mouseleave", () => {
      circle.style.transform = "scale(1)"; // Return to normal size when not hovering
    });

    // Click effect to toggle the condition display
    circle.addEventListener("click", (event) => {
      event.stopPropagation();

      const conditionDiv = circle.querySelector(
        ".elevator-condition, .lift-condition, .ASD-condition"
      );

      const isVisible = conditionDiv.style.display === "block";

      // Toggle the visibility of the condition div with opacity transition
      if (isVisible) {
        conditionDiv.style.opacity = "0";
        setTimeout(() => {
          conditionDiv.style.display = "none"; // Hide after fade
        }, 300);
      } else {
        conditionDiv.style.display = "block"; // Show immediately
        setTimeout(() => {
          conditionDiv.style.opacity = "1"; // Fade in smoothly
        }, 10); // Small delay for opacity transition
      }

      // Highlight the circle briefly when clicked
      circle.style.backgroundColor = "hsla(0, 0%, 91%, 0.918)";
      setTimeout(() => {
        circle.style.backgroundColor = "#d9d9d9";
      }, 300);
    });
  });
});
