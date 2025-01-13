input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    badGuy.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let badGuy: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
badGuy = game.createSprite(4, 4)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        sprite.change(LedSpriteProperty.Y, 1)
        while (pins.digitalReadPin(DigitalPin.P0) == 1) {
        	
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        badGuy.move(1)
        while (pins.digitalReadPin(DigitalPin.P2) == 1) {
        	
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        sprite.change(LedSpriteProperty.Y, -1)
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        	
        }
    }
})
