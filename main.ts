radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(4)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
