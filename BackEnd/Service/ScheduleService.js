const schedule = require('node-schedule');
const SMSService = require("./SMSService")

let smsService = async function(SMSDTO, date, res) {
    schedule.scheduleJob(date, async function () {
        SMSService.send_messageRsult(SMSDTO, res)
    });
}



module.exports = {smsService}