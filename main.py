@namespace
class SpriteKind:
    Win = SpriteKind.create()
    Key = SpriteKind.create()
    Element = SpriteKind.create()
    blaster = SpriteKind.create()

def on_up_pressed():
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS CODE CHANGES THE LOCKED DOORS TO UNLOCK EMPTY TILES TO INDICATE IT'S BEEN OPEN ONCE THE PLAYER OVERLAPS THE LOCKED TILE. IT THEN REMOVES THE KEY FROM THE TOOLBAR BY CALLING ITS FUNCTION

def on_overlap_tile(sprite, location):
    tiles.set_tile_at(location, assets.tile("""
        myTile2
        """))
    removeItem("BLUE")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT
# 
# THIS PROJECT DESTROYS ELEMENT SPRITES (TREASURE CHEST) WHEN THE HERO OVERLAPS IT AND ADDS A POINT.

def on_on_overlap(sprite2, otherSprite):
    sprites.destroy(otherSprite)
    addItem(sprites.read_data_string(otherSprite, "name"),
        otherSprite.image)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Element, on_on_overlap)

def on_a_pressed():
    shootdirection = 0
    if shootdirection == 1:
        pass
    elif shootdirection == 2:
        pass
    elif shootdirection == 3:
        pass
    elif shootdirection == 4:
        pass
    else:
        pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# DON'T CHANGE ADD OR REMOVE. 
# 
# ADDED KEYS EVERYWHERE THE RED OR BLUE BALL WAS TO SPAWN A KEY.
def createKeys():
    global Red_Key, Blue_Key
    for value in tiles.get_tiles_by_type(sprites.dungeon.collectible_red_crystal):
        Red_Key = sprites.create(assets.image("""
            Red Key
            """), SpriteKind.Key)
        sprites.set_data_string(Red_Key, "name", "RED")
        tiles.place_on_tile(Red_Key, value)
        tiles.set_tile_at(value, sprites.dungeon.floor_light2)
    for value2 in tiles.get_tiles_by_type(sprites.dungeon.collectible_blue_crystal):
        Blue_Key = sprites.create(assets.image("""
            Blue Key
            """), SpriteKind.Key)
        sprites.set_data_string(Blue_Key, "name", "BLUE")
        tiles.place_on_tile(Blue_Key, value2)
        tiles.set_tile_at(value2, sprites.dungeon.floor_light2)

def on_left_pressed():
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS CODE CHANGES THE OPEN CHEST TO A CLOSED CHEST ONCE THE PLAYER OVERLAPS THE OPEN CHEST TILE TO COLLECT THE ELEMENT. THIS DOES NOT REMOVE THE ITEM FROM THE TOOLBAR BECAUSE WE WANT TO SEE ALL COLLECTED ELEMENTS.

def on_overlap_tile2(sprite3, location2):
    tiles.set_tile_at(location2, sprites.dungeon.chest_closed)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_open,
    on_overlap_tile2)

# Students choose the following
# -How many points based on if they want to include key collection or not and how many elements they need to collect
# -Set what the text will say before win
# -Change winning effect if they choose
# -Set what else text will say and if they want the hero to start back over

def on_on_overlap2(sprite4, otherSprite2):
    if 0 >= 0:
        pass
    else:
        pass
sprites.on_overlap(SpriteKind.player, SpriteKind.Win, on_on_overlap2)

# add this entire code for losing

def on_countdown_end():
    pass
info.on_countdown_end(on_countdown_end)

# DO NOT CHANGE OR DELETE
# 
# SETS THE WALLS TO OFF WHEN OVERLAPPED BY THE PLAYER

def on_on_overlap3(sprite5, otherSprite3):
    sprites.destroy(otherSprite3)
    addItem(sprites.read_data_string(otherSprite3, "name"),
        otherSprite3.image)
    if sprites.read_data_string(otherSprite3, "name") == "RED":
        for value3 in tiles.get_tiles_by_type(assets.tile("""
            myTile
            """)):
            tiles.set_wall_at(value3, False)
        info.change_score_by(1)
    if sprites.read_data_string(otherSprite3, "name") == "BLUE":
        for value4 in tiles.get_tiles_by_type(assets.tile("""
            myTile1
            """)):
            tiles.set_wall_at(value4, False)
        info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Key, on_on_overlap3)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT, HOWEVER, STUDENTS CAN EDIT THE DRAWING TO MATCH THE ELEMENTS THEY NEED. IDEALLY ONE THAT NEEDS 3 DIFFERENT ELEMENTS
# 
# THIS CODE ALL CLOSED CHEST TILES TO THE HYDROGEN TILE AND SETS IT ON TOP OF THE CLOSED CHEST SO WHEN IT'S COLLECTED IT SHOWS THE CLOSED TILE UNDER IT
def createElements():
    global Hydrogen, OXYGEN
    for value5 in tiles.get_tiles_by_type(sprites.dungeon.chest_closed):
        Hydrogen = sprites.create(img("""
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
                """),
            SpriteKind.Element)
        sprites.set_data_string(Hydrogen, "name", "HYDROGEN")
        tiles.place_on_tile(Hydrogen, value5)
        tiles.set_tile_at(value5, sprites.dungeon.chest_closed)
    # HAD TO USE A DIFFERENT TILE FOR THE OXYGEN OPTION AND PLACE ON TOP BUT THE CODE BELOW MAKES IT TURN INTO A CLOSED CHEST ONCE COLLECTED VIA OVERLAPPING
    for value6 in tiles.get_tiles_by_type(sprites.dungeon.chest_open):
        OXYGEN = sprites.create(assets.image("""
            OXYGEN
            """), SpriteKind.Element)
        sprites.set_data_string(OXYGEN, "name", "OXYGEN")
        tiles.place_on_tile(OXYGEN, value6)
        tiles.set_tile_at(value6, sprites.dungeon.chest_open)

def on_right_pressed():
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def findvalue(name: str):
    for value7 in toolbar.get_items():
        if value7.get_text(ItemTextAttribute.NAME) == name:
            return toolbar.get_items().index_of(value7)
    return -1

def on_down_pressed():
    pass
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS FUNCTION CALLS THE ITEMS TO BE ADDED TO THE TOOL BAR
def addItem(name2: str, image2: Image):
    toolbar.get_items().append(Inventory.create_item(name2, image2))
    toolbar.update()
# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS CODE CHANGES THE LOCKED DOORS TO UNLOCK EMPTY TILES TO INDICATE IT'S BEEN OPEN ONCE THE PLAYER OVERLAPS THE LOCKED TILE. IT THEN REMOVES THE KEY FROM THE TOOLBAR BY CALLING ITS FUNCTION

def on_overlap_tile3(sprite6, location3):
    tiles.set_tile_at(location3, assets.tile("""
        myTile0
        """))
    removeItem("RED")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
        """),
    on_overlap_tile3)

# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS FUNCTION CREATES THE TOOLBAR ARRAY AND SETS ITS LOCATION AND MAKES SURE IT MOVES WITH THE CAMERA
def createkeytoolbar():
    global toolbar
    toolbar = Inventory.create_toolbar([], 3)
    toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, -1)
    toolbar.left = 4
    toolbar.bottom = 118
    toolbar.z = 100
    toolbar.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
"""

PLEASE DO NOT MOVE THIS STICKY NOTE OR ADJUST ANY CODE UNDER.

YOUR COACH MAY HAVE A MOMENT TO SHOW YOU HOW THIS CODE HELPS YOUR PR

"""
# DONT TOUCH OR RECREATE. WILL BE APART OF STARTER PROJECT.
# 
# THIS FUNCTION HELPS TO REMOVE THE KEYS WHEN CALLED SO IT OPENS UP THE TOOLBAR FOR ELEMENTS ONLY
def removeItem(name3: str):
    toolbar.get_items().remove_at(findvalue(name3))
    toolbar.update()
"""

IF TIME ALLOWS ADD LASWER

"""

def on_on_overlap4(sprite7, otherSprite4):
    pass
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap4)

# Students create their on start code.
# -The long text welcome
# -Drawing of the map (will start with what I have but can make their own)
# -Add their own Hero (player sprite)
# -Set camera to follow sprite
# -Create their own element win tile
# -Set location of win tile
# -Choose time to play the game
toolbar: Inventory.Toolbar = None
OXYGEN: Sprite = None
Hydrogen: Sprite = None
Blue_Key: Sprite = None
Red_Key: Sprite = None
game.show_long_text("Welcome! Your goal is to collect the correct elements along the way to make H20! Collect the corresponding color keys to unlock the doors. Be sure to get all the elements. You need 5 total points or collected items to Win before the 30 seconds is up!",
    DialogLayout.FULL)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
createkeytoolbar()
createKeys()
createElements()
info.set_score(0)
info.start_countdown(40)