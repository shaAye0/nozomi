// Loading animation
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
});

// Add-to-cart animation
const buttons = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    const flyIcon = document.createElement("div");
    flyIcon.classList.add("fly");
    flyIcon.textContent = "💖";
    document.body.appendChild(flyIcon);

    const rect = e.target.getBoundingClientRect();
    flyIcon.style.left = rect.left + "px";
    flyIcon.style.top = rect.top + "px";

    setTimeout(() => flyIcon.remove(), 1000);
  });
});
