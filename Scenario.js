class Scenario {
  constructor(context) {
    //General
    this.context = context;

    //Sprite Block properties
    this.singleBlock = new Image();
    this.singleBlock.src = "./assets/scenario/single-block.png";

    //Sprite House properties
    this.house = new Image();
    this.house.src = "./assets/scenario/house.png";
    this.house2 = new Image();
    this.house2.src = "./assets/scenario/house2.png";
    this.house3 = new Image();
    this.house3.src = "./assets/scenario/house3.png";


    //Sprite Background properties
    this.background = new Image();
    this.background.src = "./assets/scenario/background.png";

    //Sprite Forest properties
    this.forest = new Image();
    this.forest.src = "./assets/scenario/forest.png";

    //Map
    this.map = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
  }

  drawBlocks() {
    let widthSprite = 50;
    let heightSprite = 50;
    let posIniX = 0;
    let posIniY = 0;
    let posY = 484;
    let posX = 0;
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i] == 0) {
        this.context.drawImage(
          this.singleBlock, // imagem que vai ser renderizada
          posIniX, //posição X que o recorte do desenho se inicia
          posIniY, // posição Y que o recorte do desenho se inicia
          widthSprite, //largura do recorte do desenho
          heightSprite, //altura do recorte do desenho
          16 * i, // posição X que o desenho vai se posicionar na tela
          posY, // posição Y que o desenho vai se posicionar na tela
          widthSprite, // repetir a mesma coisa do item 4
          heightSprite // repetir a mesma coisa do item 5
        );
      }
    }
  }

  drawHouses() {

    context.drawImage(
      this.house, // imagem que vai ser renderizada
      0, //posição X que o recorte do desenho se inicia
      0, // posição Y que o recorte do desenho se inicia
      87, //largura do recorte do desenho
      108, //altura do recorte do desenho
      1150, // posição X que o desenho vai se posicionar na tela
      376, // posição Y que o desenho vai se posicionar na tela
      87, // repetir a mesma coisa do item 4
      108 // repetir a mesma coisa do item 5
    );

    context.drawImage(
        this.house2, // imagem que vai ser renderizada
        0, //posição X que o recorte do desenho se inicia
        0, // posição Y que o recorte do desenho se inicia
        120, //largura do recorte do desenho
        150, //altura do recorte do desenho
        140, // posição X que o desenho vai se posicionar na tela
        359, // posição Y que o desenho vai se posicionar na tela
        120, // repetir a mesma coisa do item 4
        130 // repetir a mesma coisa do item 5
      );

      context.drawImage(
        this.house3, // imagem que vai ser renderizada
        0, //posição X que o recorte do desenho se inicia
        0, // posição Y que o recorte do desenho se inicia
        120, //largura do recorte do desenho
        150, //altura do recorte do desenho
        410, // posição X que o desenho vai se posicionar na tela
        398, // posição Y que o desenho vai se posicionar na tela
        120, // repetir a mesma coisa do item 4
        130 // repetir a mesma coisa do item 5
      );

      context.drawImage(
        this.house, // imagem que vai ser renderizada
        0, //posição X que o recorte do desenho se inicia
        0, // posição Y que o recorte do desenho se inicia
        87, //largura do recorte do desenho
        108, //altura do recorte do desenho
        660, // posição X que o desenho vai se posicionar na tela
        376, // posição Y que o desenho vai se posicionar na tela
        87, // repetir a mesma coisa do item 4
        108 // repetir a mesma coisa do item 5
      );
  }

  drawBackground() {
    let widthSprite = 1350;
    let heightSprite = 500;
    let posIniX = 0;
    let posIniY = 0;
    let posY = 0;
    let posX = 0;

    context.drawImage(
      this.background, // imagem que vai ser renderizada
      posIniX, //posição X que o recorte do desenho se inicia
      posIniY, // posição Y que o recorte do desenho se inicia
      widthSprite, //largura do recorte do desenho
      heightSprite, //altura do recorte do desenho
      posX, // posição X que o desenho vai se posicionar na tela
      posY, // posição Y que o desenho vai se posicionar na tela
      widthSprite, // repetir a mesma coisa do item 4
      heightSprite // repetir a mesma coisa do item 5
    );
  }

  drawForest() {
    let widthSprite = 400;
    let heightSprite = 400;
    let posIniX = 0;
    let posIniY = 0;
    let posY = 300;
    let posX = 1180;

    context.drawImage(
      this.forest, // imagem que vai ser renderizada
      posIniX, //posição X que o recorte do desenho se inicia
      posIniY, // posição Y que o recorte do desenho se inicia
      widthSprite, //largura do recorte do desenho
      heightSprite, //altura do recorte do desenho
      1200, // posição X que o desenho vai se posicionar na tela
      posY, // posição Y que o desenho vai se posicionar na tela
      widthSprite, // repetir a mesma coisa do item 4
      heightSprite // repetir a mesma coisa do item 5
    );

    context.drawImage(
      this.forest, // imagem que vai ser renderizada
      posIniX, //posição X que o recorte do desenho se inicia
      posIniY, // posição Y que o recorte do desenho se inicia
      widthSprite, //largura do recorte do desenho
      heightSprite, //altura do recorte do desenho
      0, // posição X que o desenho vai se posicionar na tela
      posY, // posição Y que o desenho vai se posicionar na tela
      widthSprite, // repetir a mesma coisa do item 4
      heightSprite // repetir a mesma coisa do item 5
    );

    context.drawImage(
      this.forest, // imagem que vai ser renderizada
      posIniX, //posição X que o recorte do desenho se inicia
      posIniY, // posição Y que o recorte do desenho se inicia
      widthSprite, //largura do recorte do desenho
      heightSprite, //altura do recorte do desenho
      500, // posição X que o desenho vai se posicionar na tela
      posY, // posição Y que o desenho vai se posicionar na tela
      widthSprite, // repetir a mesma coisa do item 4
      heightSprite // repetir a mesma coisa do item 5
    );
  }

  draw() {
    this.drawBackground();
    this.drawForest();
    this.drawBlocks();
    this.drawHouses();
  }
}
