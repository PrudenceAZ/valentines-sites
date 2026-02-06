// --- Prénom dynamique ---
const params = new URLSearchParams(window.location.search);
const prenom = params.get("prenom") || "mon amour";
document.getElementById("prenom").textContent = prenom;

// --- Boutons ---
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "Tu viens de rendre quelqu’un très heureux 💖";
});

// Bouton NON qui fuit
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// --- Cœurs animés ---
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.fontSize = (Math.random() * 15 + 15) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
