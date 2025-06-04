radio.setGroup(54)
radio.setTransmitPower(7)
radio.setFrequencyBand(4)
radio.setTransmitSerialNumber(true)
input.onButtonPressed(Button.A, function () {
    radio.sendString(`${"Stop"}`)
})

basic.forever(function () {
    const x = Math.round(input.acceleration(Dimension.X));
    const y = Math.round(input.acceleration(Dimension.Y));
    radio.sendString(`${x, y}`)
    basic.pause(60)
})

