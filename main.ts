input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 160)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.forever(function () {
	
})
