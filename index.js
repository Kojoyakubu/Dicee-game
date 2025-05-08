function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    var diceImage1 = "images/dice" + randomNumber1 + ".png";
    var diceImage2 = "images/dice" + randomNumber2 + ".png";
  
    document.querySelector(".img1").setAttribute("src", diceImage1);
    document.querySelector(".img2").setAttribute("src", diceImage2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }
  }
  
  // Roll dice on page load
  window.onload = rollDice;
  
  // Create Roll Dice button
  var button = document.createElement("button");
  button.textContent = "Roll Dice";
  button.style.fontSize = "1.5rem";
  button.style.padding = "10px 20px";
  button.style.marginTop = "20px";
  button.style.backgroundColor = "#4ECCA3";
  button.style.color = "#232931";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";
  button.style.fontFamily = "'Indie Flower', cursive";
  
  button.onmouseover = function() {
    button.style.backgroundColor = "#45b894";
  };
  button.onmouseout = function() {
    button.style.backgroundColor = "#4ECCA3";
  };
  
  button.onclick = rollDice;
  
  // Add button to container
  document.querySelector(".container").appendChild(button);
  