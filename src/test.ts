// @ts-nocheck
const HID = require('node-hid')

const VENDOR_ID=0x17cc
const PRODUCT_ID=0x1600

const COMMAND_LIGHT_UP_BUTTON = 0x01;
const buttonIndex = 0;
const red = 255;
const green = 0;

const device = new HID.HID(VENDOR_ID, PRODUCT_ID);

device.on('data', (data) => {
    const json = Buffer.from(data).toJSON()
    console.log(Buffer.from(json.data).toJSON())
    const blue = 0;
    
    const message = Buffer.from([COMMAND_LIGHT_UP_BUTTON, buttonIndex, red, green, blue]);
    
    // Send the command to the device
    device.write(message);
    
    // Close the device
    device.close();
})





// var HID = require('node-hid');
// var devices = HID.devices();

// console.log(devices)

// var usbDetect  = require('usb-detection');
// usbDetect.startMonitoring();

// usbDetect.on('add', function(device) {
// 	console.log(device);
// });

