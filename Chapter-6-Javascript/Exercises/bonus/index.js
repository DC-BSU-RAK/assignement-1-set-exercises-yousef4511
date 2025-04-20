// Global variables
let correctColor;
let lives = 3;
let score = 0;

// Start or restart the game
function startGame() {
  document.getElementById("restart").style.display = "none";
  lives = 3;
  score = 0;
  document.getElementById("lives").textContent = lives;
  document.getElementById("score").textContent = score;
  document.getElementById("message").textContent = "";
  generateRound();
}

// Generate random RGB value
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create a new round
function generateRound() {
  const options = document.getElementById("options");
  options.innerHTML = "";

  // Generate the correct color and add it to the list
  correctColor = randomRGB();
  document.getElementById("rgb-display").textContent = correctColor;

  const colors = [correctColor];

  // Add two other random colors
  while (colors.length < 3) {
    const newColor = randomRGB();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  // Shuffle the color array
  colors.sort(() => Math.random() - 0.5);

  // Create color boxes
  colors.forEach(color => {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.onclick = () => handleChoice(color);
    options.appendChild(div);
  });
}

// Handle user click
function handleChoice(selectedColor) {
  if (selectedColor === correctColor) {
    document.getElementById("message").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = score;
    generateRound();
  } else {
    document.getElementById("message").textContent = "Wrong!";
    lives--;
    document.getElementById("lives").textContent = lives;

    if (lives <= 0) {
      endGame();
    }
  }
}

// End the game
function endGame() {
  document.getElementById("message").textContent = `Game Over! Final Score: ${score}`;
  document.getElementById("restart").style.display = "inline-block";
  document.getElementById("options").innerHTML = "";
}

// Start the game when page loads
window.onload = startGame;
