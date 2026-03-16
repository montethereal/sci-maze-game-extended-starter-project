// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000030d0d0d0d0d0e0d0d0d0d0d0e0d0d0b0413131302020202020202021313130a041313130202020202020202131313080813131313131313131302021313130a0413131313131413131302020213130a0413131313131613131313020213130a040202020202180f021313020213130a0402020202021011021313131313130a080202020202020213131313131313080402020202020202131313161313130a040202180f020202131302190f02020a0402021011021313131302101102020a0402131613131313131313020202020a0402131313131313131513020202020a0402131313131713131313020202020c05060906060612010606060606090607`, img`
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . 2 2 . . . 2 
2 . . . . . . . . . 2 2 2 . . 2 
2 . . . . . 2 2 . . . 2 2 . . 2 
2 2 2 2 2 2 . . 2 . . 2 2 . . 2 
2 2 2 2 2 2 . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 . . . 2 2 . . 2 
2 2 2 . . 2 2 2 . . 2 . . 2 2 2 
2 2 2 . . 2 . . . . 2 . . 2 2 2 
2 2 . 2 2 . . . . . . 2 2 2 2 2 
2 2 . . . . . . . . . 2 2 2 2 2 
2 2 . . . . 2 2 . . . 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.stairNorth,sprites.dungeon.floorLight2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1,myTiles.tile3,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
