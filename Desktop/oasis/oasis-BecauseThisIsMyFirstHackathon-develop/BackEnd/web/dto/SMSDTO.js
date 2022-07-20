let get = function (req, res, next) {
    const {phone, body_content} = req.query
    let Obj = {
        phone , body_content,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const {phone, body_content} = req.body
    let Obj = { 
        phone , body_content,
        userObj : req.user
    }
    return Obj
}

let random = function (req, res, next) {
    const {phone} = req.query
    randomNum = generateRandomCode(4)
    body_content = `[인증 번호] ${randomNum} ` 
    console.log(body_content)
    let Obj = { 
        phone , body_content,
        userObj : req.user
    }
    return Obj
}

function generateRandomCode(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10)
    }
    return str
  }

module.exports = {get, post, random} 