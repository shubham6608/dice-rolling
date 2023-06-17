function result() {
  var number1 = Math.floor(Math.random() * 6) + 1;
  var number2 = Math.floor(Math.random() * 6) + 1;
  console.log(number1, number2);
  var player1Dot1 = document.querySelector(".player1-dot1");
  var player1Dot2 = document.querySelector(".player1-dot2");
  var player1Dot3 = document.querySelector(".player1-dot3");
  var player1Dot4 = document.querySelector(".player1-dot4");
  var player1Dot5 = document.querySelector(".player1-dot5");
  var player1Dot6 = document.querySelector(".player1-dot6");

  var player2Dot1 = document.querySelector(".player2-dot1");
  var player2Dot2 = document.querySelector(".player2-dot2");
  var player2Dot3 = document.querySelector(".player2-dot3");
  var player2Dot4 = document.querySelector(".player2-dot4");
  var player2Dot5 = document.querySelector(".player2-dot5");
  var player2Dot6 = document.querySelector(".player2-dot6");

  var cube1 = document.querySelector(".cube1");
  var cube1Child = cube1.querySelectorAll(".dot");

  var cube2 = document.querySelector(".cube2");
  var cube2Child = cube2.querySelectorAll(".dot");

  if (number1 === 1) {
    player1Dot1.style.display = "none";
    player1Dot2.style.display = "none";
    player1Dot3.style.display = "none";
    player1Dot4.style.display = "none";
    player1Dot5.style.display = "none";
  }
  if (number2 === 1) {
    player2Dot1.style.display = "none";
    player2Dot2.style.display = "none";
    player2Dot3.style.display = "none";
    player2Dot4.style.display = "none";
    player2Dot5.style.display = "none";
  }

  if (number1 === 2) {
    player1Dot1.style.display = "none";
    player1Dot2.style.display = "none";
    player1Dot3.style.display = "none";
    player1Dot4.style.display = "none";
  }
  if (number2 === 2) {
    player2Dot1.style.display = "none";
    player2Dot2.style.display = "none";
    player2Dot3.style.display = "none";
    player2Dot4.style.display = "none";
  }
  if (number1 === 3) {
    player1Dot1.style.display = "none";
    player1Dot2.style.display = "none";
    player1Dot3.style.display = "none";
  }
  if (number2 === 3) {
    player2Dot1.style.display = "none";
    player2Dot2.style.display = "none";
    player2Dot3.style.display = "none";
  }

  if (number1 === 4) {
    player1Dot1.style.display = "none";
    player1Dot2.style.display = "none";

    cube1Child.forEach((child, index) => {
      child.style.margin = "5px";
    });
  }
  if (number2 === 4) {
    player2Dot1.style.display = "none";
    player2Dot2.style.display = "none";

    cube2Child.forEach((child, index) => {
      child.style.margin = "5px";
    });
  }

  if (number1 === 5) {
    player1Dot1.style.display = "none";

    cube1Child.forEach((child, index) => {
      child.style.margin = "3.5px";
    });
    player1Dot4.style.margin = "0px 12px";
  }
  if (number2 === 5) {
    player2Dot1.style.display = "none";

    cube2Child.forEach((child, index) => {
      child.style.margin = "3.5px";
    });

    player2Dot4.style.margin = "0px 12px";
  }

  if (number1 > number2) {
    document.getElementById("winner").textContent = "Player 1 is winner";
  } else if (number1 < number2) {
    document.getElementById("winner").textContent = "Player 2 is winner";
  } else {
    document.getElementById("winner").textContent = "DRAW!!!";
  }

  setTimeout(() => {
    document.getElementById("winner").textContent = "Refreshing...";
    window.location.reload();
  }, 3000);
}
