class MainMenu{
    constructor(){
        this.levelState = 0
        this.tutorial;

        this.menu = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
        this.menuImg = loadImage("MainMenu/menu.jpg")
        this.menu.addImage(this.menuImg)

        this.lvl1button = createSprite(windowWidth / 6.5, windowHeight / 4, windowWidth / 12, windowWidth / 12)
        this.lvl1button.visible = false
        this.lvl1Img = loadImage("MainMenu/lvl1Img.png")
        this.lvl1button.addImage(this.lvl1Img)

        this.dysoTxt = createSprite(windowWidth / 2, windowHeight / 3, 200, 200)
        this.txtImg = loadImage("MainMenu/startText.png")
        this.dysoTxt.addImage(this.txtImg)
        this.dysoTxt.scale = 1

        this.playButton = createSprite(windowWidth / 2, windowHeight / 1.3, windowWidth / 6, windowHeight / 8)
        this.playButton.shapeColor = "red"
        this.playImg = loadImage("MainMenu/playB.png")
        this.playButton.addImage(this.playImg)
        this.playButton.scale = 1

        this.lvlButton = createSprite(windowWidth / 1.3, windowHeight / 1.25, windowWidth / 10, windowHeight / 8)
        this.menuImg = loadImage("MainMenu/menuImg.png")
        this.lvlButton.addImage(this.menuImg)
        this.lvlButton.scale = 1

    }

    play(){
        if(mousePressedOver(this.playButton) || mousePressedOver(this.lvl1button)){
           this.levelState = 1
           this.menu.visible = false
           this.playButton.visible = false
           this.lvlButton.visible = false
           this.lvl1button.visible = false
           this.tutorial = new lvl1
           this.dysoTxt.visible = false
        }

        if(mousePressedOver(this.lvlButton)){
            // this.menu.visible = false
            this.playButton.visible = false
            this.lvlButton.visible = false
            this.lvl1button.visible = true
            this.dysoTxt.visible = false
         }

        if(this.levelState == 1){
            this.tutorial.play()
            this.tutorial.end()
        }
    }
}