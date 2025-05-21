radio.setGroup(54)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    radio.sendString(`${x},${y}`)

    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop")
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)

})