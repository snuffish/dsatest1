
var buzzers = require('./buzzers');

var buzzerController = new buzzers.BuzzerController();
console.log(buzzerController)

function blinkLed(buzzerNumber)
{
    buzzerController.led(buzzerNumber, true);
    setTimeout(function () {
        buzzerController.led(buzzerNumber, false);
    }, 500);
}

buzzerController.on('button', function (buzzer, button, state) {
    console.log('buzzer', buzzer, 'button', button, 'state', state);
    if (state) {
        blinkLed(buzzer);
    }
});
