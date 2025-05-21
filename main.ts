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

basic.forever(function () {
    const ab = Math.round(input.acceleration(Dimension.X)); + Math.round(input.acceleration(Dimension.Y));

    console.log(`${ab}`)

    radio.sendString(`${ab}`)
    basic.pause(100)
})})