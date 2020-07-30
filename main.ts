basic.forever(function () {
    basic.pause(200)
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1024
    )
    serial.writeString("" + input.acceleration(Dimension.X) + " " + input.acceleration(Dimension.Y) + " " + input.acceleration(Dimension.Z) + " " + input.buttonIsPressed(Button.A) + " " + input.buttonIsPressed(Button.B))
})
