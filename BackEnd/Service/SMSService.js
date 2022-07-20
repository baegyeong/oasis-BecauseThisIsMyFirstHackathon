var Snes = require("../snes/index.js")

let send_message = function(SMSDTO,res,next) {
  const {phone, body_content} = SMSDTO
  Snes(phone,body_content)
  let info = {phone, body_content}
  let result = {code : 200, info }
  return result
}

let send_messageRsult = function(SMSDTO, res, next){
  let result = send_message(SMSDTO)
  return res.send(result)
}


module.exports = {send_message, send_messageRsult}