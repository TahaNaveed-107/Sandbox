// Create the glow element and add it to the body
const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

// Update the glow element's position on mouse move
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.transform = `translate(${e.pageX - 25}px, ${
    e.pageY - 25
  }px)`;
});
