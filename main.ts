radio.setGroup(54)
radio.setTransmitPower(7)
radio.setFrequencyBand(4)
radio.setTransmitSerialNumber(true)
const s = 1569162800
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
    const xd = Math.round(input.acceleration(Dimension.X));
    const yd = Math.round(input.acceleration(Dimension.Y));
    console.log(`${xd, yd}`)
    radio.sendString(`${xd, yd, s}`)
    basic.pause(60)
})

