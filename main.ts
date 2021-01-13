input.onButtonPressed(Button.A, function () {
    magn_veldst = Math.round(input.magneticForce(Dimension.X))
    basic.showNumber(magn_veldst)
})
let magn_veldst = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
control.waitMicros(40000)
basic.clearScreen()
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
