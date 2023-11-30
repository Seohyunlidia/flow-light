radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    oppo = 0
})
input.onGesture(Gesture.Shake, function () {
    oppo = 1
})
function two () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.White))
}
function rotate () {
    for (let index = 0; index <= 4; index++) {
    	
    }
}
let c = 0
let b = 0
let a = 0
let oppo = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB)
let strip_next = neopixel.create(DigitalPin.P14, 8, NeoPixelMode.RGB)
let strip_too = neopixel.create(DigitalPin.P15, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 500) {
        a = randint(0, 255)
        b = randint(0, 255)
        c = randint(0, 255)
        strip.showColor(neopixel.rgb(a, b, c))
        strip.show()
        basic.pause(500)
        strip_next.showColor(neopixel.rgb(a, b, c))
        strip_next.show()
        basic.pause(500)
        strip_too.showColor(neopixel.rgb(a, b, c))
        strip_too.show()
        basic.pause(500)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        strip_next.showColor(neopixel.colors(NeoPixelColors.Black))
        strip_next.show()
    }
})
