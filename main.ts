radio.setGroup(1)
radio.setTransmitPower(7)
let id = 1
basic.showNumber(id)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(id)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    basic.pause(200)
})
