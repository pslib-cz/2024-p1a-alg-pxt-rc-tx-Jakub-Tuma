radio.setGroup(54)
radio.setTransmitPower(7)
radio.setFrequencyBand(4)
radio.setTransmitSerialNumber(true)
let go = true
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    go = !go
    if (go) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("Stop")
    }
})
basic.forever(function () {
    const x = Math.round(input.acceleration(Dimension.X));
    const y = Math.round(input.acceleration(Dimension.Y));
    console.log(`${x, y}`)
    radio.sendString(`${x, y}`)
    basic.pause(60)
})

