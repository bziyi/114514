let _1 = 0
let _2: game.LedSprite = null
let _3 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    game.gameOver()
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.clearScreen()
    _3 = 1
    _2 = game.createSprite(1, -1)
    for (let index = 0; index < 100; index++) {
        _2.turn(Direction.Right, randint(0, 100))
        _2.ifOnEdgeBounce()
        _2.move(1)
        basic.pause(100)
    }
    _3 = 0
    _2.delete()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    _1 = randint(1, 4)
    if (_1 == 1) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (_1 == 2) {
            basic.showArrow(ArrowNames.East)
        } else {
            if (_1 == 3) {
                basic.showArrow(ArrowNames.South)
            } else {
                if (_1 == 4) {
                    basic.showArrow(ArrowNames.West)
                }
            }
        }
    }
})
