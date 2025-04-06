function upperDisp (HAD: number) {
    L = 0
    basic.clearScreen()
    if (HAD & 0x01) {
        led.plot(4, 0)
    }
    if (HAD & 0x02) {
        led.plot(3, 0)
    }
    if (HAD & 0x04) {
        led.plot(2, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    H += -1
    if (H < 0) {
        H = 7
    }
    upperDisp(H)
})
input.onButtonPressed(Button.B, function () {
    H += 1
    if (H > 7) {
        H = 0
    }
    upperDisp(H)
})
let RC = 0
let X = 0
let Y = 0
let L = 0
let H = 0
upperDisp(H)
basic.forever(function () {
    Y = (L >>  2) + 1
    X = (L & 0x03) + 1
    led.unplot(X, Y)
    if (H == 0 && L <= 0 || H == 7 && L >= 15) {
        RC = -1
    } else {
            RC = testi2c.testRead(H * 16 + L)
        if (RC == 0) {
            led.plotBrightness(X, Y, 255)
        } else {
            led.plotBrightness(X, Y, 5)
        }
    }
    L += 1
    if (L > 15) {
        L = 0
        basic.pause(1000)
    }
})
