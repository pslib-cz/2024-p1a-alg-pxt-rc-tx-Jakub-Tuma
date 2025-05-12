radio.setGroup(173);
radio.setTransmitPower(7)
let go = true

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    go = !go
    if (go) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})

basic.forever(function () {
    let x = Math.round(input.acceleration(Dimension.X));
    let y = Math.round(input.acceleration(Dimension.Y));

    console.log(`X: ${x}, Y: ${y}`);

    radio.sendValue("SpeedX", x) && radio.sendValue("SpeedY", y);
});
