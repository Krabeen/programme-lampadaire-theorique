radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 || receivedNumber == 3) {
        proximité = 1
        basic.pause(100)
        proximité = 0
    }
})
input.onButtonPressed(Button.A, function () {
    présence = 1
    basic.pause(2000)
    présence = 0
})
input.onButtonPressed(Button.B, function () {
    nuit = 1
    basic.pause(30000)
    nuit = 0
})
let nuit = 0
let présence = 0
let proximité = 0
radio.setGroup(167)
basic.forever(function () {
    if (nuit == 1) {
        if (présence == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            radio.sendNumber(2)
        } else {
            if (proximité == 1) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
