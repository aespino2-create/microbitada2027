// Programa per a la micro:bit (MakeCode: makecode.microbit.org)
// Enganxa'l a la vista "JavaScript" d'un projecte nou i descarrega'l a la micro:bit.
basic.showIcon(IconNames.Diamond)
input.onButtonPressed(Button.A, function () {
    serial.writeLine("A")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.Shake, function () {
    serial.writeLine("SHAKE")
    basic.showIcon(IconNames.Yes)
})
