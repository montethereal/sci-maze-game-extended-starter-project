namespace SpriteKind {
    export const Win = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Element = SpriteKind.create()
    export const blaster = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS CODE CHANGES THE LOCKED DOORS TO UNLOCK EMPTY TILES TO INDICATE IT'S BEEN OPEN ONCE THE PLAYER OVERLAPS THE LOCKED TILE. IT THEN REMOVES THE KEY FROM THE TOOLBAR BY CALLING ITS FUNCTION
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile2`)
    removeItem("BLUE")
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT
// 
// THIS PROJECT DESTROYS ELEMENT SPRITES (TREASURE CHEST) WHEN THE HERO OVERLAPS IT AND ADDS A POINT.
sprites.onOverlap(SpriteKind.Player, SpriteKind.Element, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    addItem(sprites.readDataString(otherSprite, "name"), otherSprite.image)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let shootdirection = 0
    if (shootdirection == 1) {
    	
    } else if (shootdirection == 2) {
    	
    } else if (shootdirection == 3) {
    	
    } else if (shootdirection == 4) {
    	
    } else {
    	
    }
})
// DON'T CHANGE ADD OR REMOVE. 
// 
// ADDED KEYS EVERYWHERE THE RED OR BLUE BALL WAS TO SPAWN A KEY.
function createKeys () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        Red_Key = sprites.create(assets.image`Red Key`, SpriteKind.Key)
        sprites.setDataString(Red_Key, "name", "RED")
        tiles.placeOnTile(Red_Key, value)
        tiles.setTileAt(value, sprites.dungeon.floorLight2)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
        Blue_Key = sprites.create(assets.image`Blue Key`, SpriteKind.Key)
        sprites.setDataString(Blue_Key, "name", "BLUE")
        tiles.placeOnTile(Blue_Key, value)
        tiles.setTileAt(value, sprites.dungeon.floorLight2)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS CODE CHANGES THE OPEN CHEST TO A CLOSED CHEST ONCE THE PLAYER OVERLAPS THE OPEN CHEST TILE TO COLLECT THE ELEMENT. THIS DOES NOT REMOVE THE ITEM FROM THE TOOLBAR BECAUSE WE WANT TO SEE ALL COLLECTED ELEMENTS.
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
// Students choose the following
// -How many points based on if they want to include key collection or not and how many elements they need to collect
// -Set what the text will say before win
// -Change winning effect if they choose
// -Set what else text will say and if they want the hero to start back over
sprites.onOverlap(SpriteKind.Player, SpriteKind.Win, function (sprite, otherSprite) {
    if (0 >= 0) {
    	
    } else {
    	
    }
})
// add this entire code for losing
info.onCountdownEnd(function () {
	
})
// DO NOT CHANGE OR DELETE
// 
// SETS THE WALLS TO OFF WHEN OVERLAPPED BY THE PLAYER
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    addItem(sprites.readDataString(otherSprite, "name"), otherSprite.image)
    if (sprites.readDataString(otherSprite, "name") == "RED") {
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setWallAt(value, false)
        }
        info.changeScoreBy(1)
    }
    if (sprites.readDataString(otherSprite, "name") == "BLUE") {
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setWallAt(value, false)
        }
        info.changeScoreBy(1)
    }
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT, HOWEVER, STUDENTS CAN EDIT THE DRAWING TO MATCH THE ELEMENTS THEY NEED. IDEALLY ONE THAT NEEDS 3 DIFFERENT ELEMENTS
// 
// THIS CODE ALL CLOSED CHEST TILES TO THE HYDROGEN TILE AND SETS IT ON TOP OF THE CLOSED CHEST SO WHEN IT'S COLLECTED IT SHOWS THE CLOSED TILE UNDER IT
function createElements () {
    for (let value of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
        Hydrogen = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c 3 b 3 c c c c c c b 
            b c c c c c 3 3 3 c c c c c c b 
            b c c c c c 3 c 3 c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Element)
        sprites.setDataString(Hydrogen, "name", "HYDROGEN")
        tiles.placeOnTile(Hydrogen, value)
        tiles.setTileAt(value, sprites.dungeon.chestClosed)
    }
    // HAD TO USE A DIFFERENT TILE FOR THE OXYGEN OPTION AND PLACE ON TOP BUT THE CODE BELOW MAKES IT TURN INTO A CLOSED CHEST ONCE COLLECTED VIA OVERLAPPING
    for (let value of tiles.getTilesByType(sprites.dungeon.chestOpen)) {
        OXYGEN = sprites.create(assets.image`OXYGEN`, SpriteKind.Element)
        sprites.setDataString(OXYGEN, "name", "OXYGEN")
        tiles.placeOnTile(OXYGEN, value)
        tiles.setTileAt(value, sprites.dungeon.chestOpen)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function findvalue (name: string) {
    for (let value of toolbar.get_items()) {
        if (value.get_text(ItemTextAttribute.Name) == name) {
            return toolbar.get_items().indexOf(value)
        }
    }
    return -1
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS FUNCTION CALLS THE ITEMS TO BE ADDED TO THE TOOL BAR
function addItem (name: string, image2: Image) {
    toolbar.get_items().push(Inventory.create_item(name, image2))
    toolbar.update()
}
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS CODE CHANGES THE LOCKED DOORS TO UNLOCK EMPTY TILES TO INDICATE IT'S BEEN OPEN ONCE THE PLAYER OVERLAPS THE LOCKED TILE. IT THEN REMOVES THE KEY FROM THE TOOLBAR BY CALLING ITS FUNCTION
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    removeItem("RED")
})
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS FUNCTION CREATES THE TOOLBAR ARRAY AND SETS ITS LOCATION AND MAKES SURE IT MOVES WITH THE CAMERA
function createkeytoolbar () {
    toolbar = Inventory.create_toolbar([], 3)
    toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, -1)
    toolbar.left = 4
    toolbar.bottom = 118
    toolbar.z = 100
    toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
}
/**
 * PLEASE DO NOT MOVE THIS STICKY NOTE OR ADJUST ANY CODE UNDER.
 * 
 * YOUR COACH MAY HAVE A MOMENT TO SHOW YOU HOW THIS CODE HELPS YOUR PR
 */
// DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
// 
// THIS FUNCTION HELPS TO REMOVE THE KEYS WHEN CALLED SO IT OPENS UP THE TOOLBAR FOR ELEMENTS ONLY
function removeItem (name: string) {
    toolbar.get_items().removeAt(findvalue(name))
    toolbar.update()
}
/**
 */
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
// Students create their on start code.
// -The long text welcome
// -Drawing of the map (will start with what I have but can make their own)
// -Add their own Hero (player sprite)
// -Set camera to follow sprite
// -Create their own element win tile
// -Set location of win tile
// -Choose time to play the game
let toolbar: Inventory.Toolbar = null
let OXYGEN: Sprite = null
let Hydrogen: Sprite = null
let Blue_Key: Sprite = null
let Red_Key: Sprite = null
game.showLongText("Welcome! Your goal is to collect the correct elements along the way to make H20! Collect the corresponding color keys to unlock the doors. Be sure to get all the elements. You need 5 total points or collected items to Win before the 30 seconds is up!", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
let Hero = sprites.create(img`
    ...........................cccccccccc..........................
    .........................ccc11111111ccc........................
    ........................cc111111111111cc.......................
    .......................cc11111111111111cc......................
    ......................cc1111111111111111cc.....................
    ......................c111111111111111111c.....................
    .....................cc111111111111111111cc....................
    .....................cc1111111111111111111c....................
    .....................c11111111111111111111c....................
    ....................cc11111111111111111111cc...................
    ....................cc11111111111111111111cc...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111bcccc1111c...................
    ....................cc11111111111111ccc1111c...................
    .....................c11bcccc1111111cc11111c...................
    .....................cb111ccc1111111111111cc...................
    .....................cb111cc11111111111111cc...................
    .....................cb1111111111111b111ccccc..................
    ....................ccbb111111111111b11cc111cc.................
    ..................ccc11bb11111b1111b111c11111cc................
    ................cccdd111bb11111bbbb111b1111111ccccc............
    ...............cc111d1111bbb11111111bb1111bb111cc1cc...........
    ..............cc1111dd11111bbbbbbbbbbb1111bb111b111cc..........
    ..............c111111d11111111d11111bbb111bb11bb1111cc.........
    .............cc111111d11111111dd1111bb1b111b11b111111c.........
    ............cc111114441111111111ddddb11bbbb111b111111c.........
    ...........cc11111145411111111111111b11111111bb111111cc........
    ..........cc111111145411111111111111bb1111111bb1111111c........
    .........ccdd111111454111111111111111bb1111111bb111111cc.......
    ........cc111d1111145441111111111111111b1111111bb111111c.......
    .......cc11111d111d45541111111111111111bb1111111bb11111c.......
    .......c111111dd1ddd45411111111111111111bb1111111bbddd1cc......
    ......cc1111bbbbbddd454111111111111111111bb11111111bddd1c......
    ......cc11bbb111bbbd4541111111111111111111bb11111111111dcc.....
    ......cc11bb111bbbbc4541111111111111111111dbc11111111111cc.....
    ......cc11b111bb111bc5411111111111111111111dcc11111111111c.....
    bbbbbbcc111111b11111bc4cc111111111111111111ddcc1111111111c.....
    dddddddcc1111b111111bb11ccbbbbbbbb111111111dddcc11111111cc.....
    ddddddddcc111b1111111bb11cdddddddbbbbbbbbbbbbbccc111111cc......
    ddddddddddcccb11111111bbccbbddddddddddddddddddddccc111ccbbbbbbb
    ddddddddddddccc11111111bc111bbbddddddddddddddddddccccccdddddddd
    dddddddddddddccc1111111cc111111bbbddddddddddddddddddddddddddddd
    ddddddddddddbb11cc1111cc111111111bddddddddddddddddddddddddddddd
    ddddddddddbb11111cccccc111111111bdddddddddddddddddddddddddddddd
    ddddddddddb11111111111111111111bddddddddddddddddddddddddddddddd
    ddddddddddbb111111111111111111bdddddddddddddddddddddddddddddddd
    ddddddddddddbb111111111111111bddddddddddddddddddddddddddddddddd
    ddddddddddddddbb111111111111bdddddddddddddddddddddddddddddddddd
    ddddddddddddddddbb111111111bddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddbb111111bdddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddbb111bddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `, SpriteKind.Player)
Hero.setScale(0.3, ScaleAnchor.Middle)
tiles.placeOnTile(Hero, tiles.getTileLocation(2, 0))
controller.moveSprite(Hero)
scene.cameraFollowSprite(Hero)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Win)
createkeytoolbar()
createKeys()
createElements()
info.setScore(0)
info.startCountdown(40)
