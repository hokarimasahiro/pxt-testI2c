input.onButtonPressed(Button.A, function () {
    H += -1
    if (H < 0) {
        H = 7
    }
    上位表示(H)
})
input.onButtonPressed(Button.B, function () {
    H += 1
    if (H > 7) {
        H = 0
    }
    上位表示(H)
})
function 上位表示(HAD: number) {
    L = 0
    basic.clearScreen()
    if (HAD % 2 == 1) led.plot(4, 0)
    if (Math.trunc(HAD / 2) % 2 == 1) led.plot(3, 0)
    if (Math.trunc(HAD / 4) % 2 == 1) led.plot(2, 0)
    if (RW == 1) {
        led.plot(0, 0)
    }
}
input.onButtonPressed(Button.AB, function () {
    RW = 1 - RW
    上位表示(H)
})
let RC = 0
let X = 0
let Y = 0
let RW = 0
let L = 0
let H = 0
H = 0
L = 8
RW = 0
上位表示(H)
basic.forever(function () {
    Y = Math.trunc(L / 4) + 1
    X = L % 4 + 1
    led.unplot(X, Y)
    if (H == 0 && L <= 0 || H == 7 && L >= 15) {
        RC = -1
    } else {
        if (RW == 0) {
            RC = testi2c.testReadI2c(H * 16 + L)
        } else {
            RC = testi2c.testWriteI2c(H * 16 + L,0)
        }
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
