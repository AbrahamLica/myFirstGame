class Player {
  constructor(context, keyboard) {
    //--------------------------VARIABLES----------------------------------//
    //General
    this.context = context;
    this.keyboard = keyboard;

    //Player properties
    this.width = 50;
    this.height = 50;
    this.posY = 452;
    this.posX = 0;
    this.speed = 3;
    this.lastKeyPressed;

    //Jump properties
    this.canJump = true;
    this.isJumping = false;
    this.jumpHeight = 100;
    this.jumpSpeed = 2.4;
    this.gravity = 0.3;
    this.velocityY = 0;
    this.maxJumpHeight = 1000;
    this.isJumpingAnimation = false;

    //Animations properties ////////////////////////////////////////////////////////

    //General
    this.basePath = "./assets/mainCharacter/";
    this.isFacingLeft = false;
    this.isFacingRight = true;
    this.correctJumpSide = new Image();
    this.correctJumpSide.src = "./assets/mainCharacter/player-jump-forward.png";

    //inicio (parado, virado para direita)
    this.character = new Image();
    this.character.src = "./assets/mainCharacter/player-idle-forward.png";

    //parado, virado para direita
    this.idleForwardCharacter = new Image();
    this.idleForwardCharacter.src =
      "./assets/mainCharacter/player-idle-forward.png";

    //parado, virado para esquerda
    this.idleBackCharacter = new Image();
    this.idleBackCharacter.src = "./assets/mainCharacter/player-idle-back.png";

    //correndo, virado para direita
    this.runningFowardCharacter = new Image();
    this.runningFowardCharacter.src = "./assets/mainCharacter/player-run.png";

    //correndo, virado para esquerda
    this.runningBackCharacter = new Image();
    this.runningBackCharacter.src =
      "./assets/mainCharacter/player-run-back.png";

    //pulando para direita
    this.jumpForwardCharacter = new Image();
    this.jumpForwardCharacter.src =
      "./assets/mainCharacter/player-jump-forward.png";

    //pulando para esquerda
    this.jumpBackCharacter = new Image();
    this.jumpBackCharacter.src = "./assets/mainCharacter/player-jump-back.png";

    //agachado virado para frente
    this.crouchedForwardCharacter = new Image();
    this.crouchedForwardCharacter.src =
      "./assets/mainCharacter/player-crouch-forward.png";

    //agachado virado para trás
    this.crouchedBackCharacter = new Image();
    this.crouchedBackCharacter.src =
      "./assets/mainCharacter/player-crouch-back.png";
    ///////////////////////////////////////////////////////////////////////////////////

    // Sprite properties
    this.numSprite = 0; // quando essa variavel é incrementada, a posição do boneco muda para o proximo a direita
    this.posIniX = 0; // posição X que o recorte do desenho se inicia
    this.posIniY = 0; // posição Y que o recorte do desenho se inicia (incremente de 65 em 65 para mudar a posição Y)
    this.heightSprite = 32; // altura do recorte do desenho
    this.widthSprite = 0; // largura do recorte do desenho
    this.numSprites = 4; // número de sprites que a imagem possui na horizontal
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.delaySprite = 5;

    //-------------------------------------------------------------------//

    //define as dimensões iniciais
    this.character.addEventListener("load", () => {
      this.widthSprite = this.character.width / this.numSprites;
      this.posIniX = this.widthSprite * this.numSprites;
      this.draw();
    });
  }

  movePlayer() {
    // Se a tecla de cima for pressionada e o personagem puder pular, inicia o salto.
    if (this.keyboard.up && this.canJump) {
      this.isJumping = true;
      this.velocityY = -this.jumpSpeed;
      this.canJump = false;
      this.lastKeyPressed = "up";
    }

    // Se a tecla baixo for pressionada
    // else if (this.keyboard.down) {
    //   this.lastKeyPressed = "down";
    //   // this.correctJumpSide.src = this.correctJumpSide.src.substring(21)
    //   // this.correctJumpSide.src = 'nada'
    // }

    // se a tecla left for pressionada, ande para a esquerda
    if (this.keyboard.left) {
      if (this.posX <= 0) {
        this.posX = 0;
      } else {
        this.posX -= this.speed;
        this.lastKeyPressed = "left";
        this.isFacingLeft = true;
        this.correctJumpSide.src =
          "./assets/mainCharacter/player-jump-back.png";
        this.isFacingRight = false;
      }
    }

    // se a tecla right for pressionada, ande para a direita
    else if (this.keyboard.right) {
      if (this.posX + this.width >= this.context.canvas.width) {
        this.posX = this.context.canvas.width - this.width;
      } else {
        this.posX += this.speed;
        this.lastKeyPressed = "right";
      }
      this.isFacingRight = true;
      this.correctJumpSide.src =
        "./assets/mainCharacter/player-jump-forward.png";
      this.isFacingLeft = false;
    }
  }

  jump() {
    if (this.isJumping) {
      // Movimento ascendente do pulo
      this.velocityY -= this.jumpSpeed;
      this.posY += this.velocityY;

      // Verifica se o sprite atingiu a altura máxima do pulo
      if (this.posY <= this.maxJumpHeight) {
        this.isJumping = false;
      }
    } else {
      // Movimento descendente (gravidade simulada)
      this.velocityY += this.gravity;
      this.posY += this.velocityY;

      // Verifica se o sprite chegou ao chão
      if (this.posY >= 452) {
        this.posY = 452;
        this.velocityY = 0;

        // Se chegou ao chão, permite que o sprite pule novamente
        this.canJump = true;

        // Reinicia a animação de pulo apenas se a animação estava em execução
        if (this.isJumpingAnimation) {
          this.isJumpingAnimation = false;
        }
      }
    }
  }

  updateAnimation() {
    this.framesElapsed++;

    if (this.framesElapsed % this.framesHold === 0) {
      // 1 - recebe animação de pulo para esquerda, senão para direita.

      // && this.correctJumpSide.src == "./assets/mainCharacter/player-jump-back.png"
      if (!this.canJump) {
        this.character.src = this.correctJumpSide.src;
        this.numSprites = 2;
        this.isJumpingAnimation = true;
      }

      // 2 - recebe animação adequada de acordo com a tecla pressionada
      else if (this.keyboard.left) {
        this.character.src = this.runningBackCharacter.src;
        this.numSprites = 6;
        this.isJumpingAnimation = false;
      } else if (this.keyboard.right) {
        this.character.src = this.runningFowardCharacter.src;
        this.numSprites = 6;
        this.isJumpingAnimation = false;
      } else if (
        this.keyboard.down &&
        this.correctJumpSide.src ==
          "http://127.0.0.1:5501/assets/mainCharacter/player-jump-forward.png"
      ) {
        this.character.src = this.crouchedForwardCharacter.src;
        this.numSprites = 2;
        this.isJumpingAnimation = false;
      } else if (
        this.keyboard.down &&
        this.correctJumpSide.src ==
          "http://127.0.0.1:5501/assets/mainCharacter/player-jump-back.png"
      ) {
        this.character.src = this.crouchedBackCharacter.src;
        this.numSprites = 2;
        this.isJumpingAnimation = false;
      } else if (this.lastKeyPressed == "left") {
        this.character.src = this.idleBackCharacter.src;
        this.numSprites = 4;
        this.isJumpingAnimation = false;
      } else if (this.lastKeyPressed == "right") {
        this.character.src = this.idleForwardCharacter.src;
        this.numSprites = 4;
        this.isJumpingAnimation = false;
      } else if (
        this.lastKeyPressed == "up" &&
        this.correctJumpSide.src ==
          "http://127.0.0.1:5501/assets/mainCharacter/player-jump-back.png"
      ) {
        this.character.src = this.idleBackCharacter.src;
        this.numSprites = 4;
        this.isJumpingAnimation = false;
      } else {
        this.character.src = this.idleForwardCharacter.src;
        this.numSprites = 4;
        this.isJumpingAnimation = false;
      }

      //faz o sprite ser animado de acordo com os frames
      if (
        this.isJumpingAnimation &&
        this.framesCurrent >= this.numSprites - 1
      ) {
        this.framesCurrent = this.numSprites - 1;
      } else if (
        !this.isJumpingAnimation &&
        this.framesCurrent >= this.numSprites - 1
      ) {
        this.framesCurrent = 0;
      } else {
        this.framesCurrent++;
      }
    }
  }

  update() {
    this.movePlayer();
    this.updateAnimation();
    this.jump();
  }

  draw() {
    this.context.drawImage(
      this.character, // imagem que vai ser renderizada
      this.framesCurrent * this.widthSprite, //posição X que o recorte do desenho se inicia
      this.posIniY, // posição Y que o recorte do desenho se inicia
      this.widthSprite, //largura do recorte do desenho
      this.heightSprite, //altura do recorte do desenho
      this.posX, // posição X que o desenho vai se posicionar na tela
      this.posY, // posição Y que o desenho vai se posicionar na tela
      this.widthSprite, // repetir a mesma coisa do item 4
      this.heightSprite // repetir a mesma coisa do item 5
    );
  }
}
