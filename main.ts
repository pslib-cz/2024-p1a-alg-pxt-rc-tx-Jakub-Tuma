radio.setGroup(173);

basic.forever(function () {
        let x = Math.round(input.acceleration(Dimension.X));
        let y = Math.round(input.acceleration(Dimension.Y));

        console.log(`X: ${x}, Y: ${y}`);

        radio.sendValue("speedX", x);
        radio.sendValue("speedY", y);

input.onButtonPressed(Button.B, function () { 
    radio.sendValue("Speed0", 0);
})
    
});
