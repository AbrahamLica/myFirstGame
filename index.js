var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var canvasDiv = document.querySelector(".canvas");
var containerStartScreen = document.querySelector(".ContainerStartScreenGame");
var buttonStart = document.querySelector(".buttonStart");
var rightFooter = document.querySelector(".rightFooter");

buttonStart.addEventListener("click", () => {
  // canvasDiv.classList.add('show')
  canvasDiv.style.display = "flex";
  containerStartScreen.style.display = "none";
  rightFooter.style.display = "flex";
});

const keyboard = {
  up: false,
  down: false,
  left: false,
  right: false,
  walking: false,
};

var player = new Player(context, keyboard);

var scenario = new Scenario(context);

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keyboard.up = true;
      break;

    case "ArrowDown":
      keyboard.down = true;
      break;

    case "ArrowRight":
      keyboard.walking = true;
      keyboard.right = true;
      break;

    case "ArrowLeft":
      keyboard.walking = true;
      keyboard.left = true;
      break;

    default:
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keyboard.up = false;
      break;

    case "ArrowDown":
      keyboard.down = false;
      break;

    case "ArrowRight":
      keyboard.walking = false;
      keyboard.right = false;
      break;

    case "ArrowLeft":
      keyboard.walking = false;
      keyboard.left = false;
      break;

    default:
      break;
  }
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  scenario.draw();
  player.update();
  player.draw();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function teste() {
  console.log(`
  Y: ${player.posY}
  canJump: ${player.canJump}
  isJumping: ${player.isJumping}
  isJumpingAnimation: ${player.isJumpingAnimation}
  src: ${player.character.src}
  lastKeyPressed: ${player.lastKeyPressed}
  isFacingLeft: ${player.isFacingLeft}
  isFacingRight: ${player.isFacingRight}
  correctjumpside: ${player.correctJumpSide.src}
  `);
}
