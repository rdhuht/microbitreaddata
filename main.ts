serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + input.acceleration(Dimension.X) + " " + input.acceleration(Dimension.Y) + " " + input.acceleration(Dimension.Z) + " " + input.buttonIsPressed(Button.A) + " " + input.buttonIsPressed(Button.B))
    basic.pause(200)
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1024
    )
})
