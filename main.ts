function bg () {
    scene.setBackgroundColor(11)
}
function overlap () {
	
}
function score () {
    info.changeScoreBy(1)
}
function hero () {
    spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 2 . . . . 2 1 . . . . 
. . . . . 1 2 f f 2 1 . . . . . 
. . . . 1 2 2 2 2 2 2 1 . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . 1 d 2 2 2 2 d 1 . . . . 
. . . 1 1 2 2 2 2 2 2 1 1 . . . 
. . . . 1 2 2 2 2 2 2 1 . . . . 
. . . . . 1 1 2 1 2 1 . . . . . 
. . . . . . f . . f . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(spaceship, 100, 100)
    spaceship.y = 110
    info.setLife(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . b b b b . . . . . . 
. . . . . b d 1 1 d b . . . . . 
. . . . b d 1 1 1 1 d b . . . . 
. . . . b 1 1 1 1 1 1 b . . . . 
. . . . b 1 1 1 1 1 1 b . . . . 
. . . . b d 1 1 1 1 d b . . . . 
. . . . . b d 1 1 d b . . . . . 
. . . . . . b b b b . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0)
}
let projectile2: Sprite = null
let spaceship: Sprite = null
bg()
hero()
game.onUpdateInterval(200, function () {
    projectile()
})
