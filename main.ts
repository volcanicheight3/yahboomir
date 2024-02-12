radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        40,
        SuperBit.enMotors.M2,
        40
        )
    } else if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        40,
        SuperBit.enMotors.M4,
        40
        )
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -40,
        SuperBit.enMotors.M4,
        -40
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -40,
        SuperBit.enMotors.M2,
        -40
        )
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let xc = 1
radio.setGroup(xc)
