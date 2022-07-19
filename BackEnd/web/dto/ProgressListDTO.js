let get = function(req, res, next) {
    let Obj = {
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const { PLName, PLExplain, PL100, PL300, PL500, checkDate } = req.body
    let Obj = {
        PLName, PL100, PL300, PL500,
        userObj : req.user
    }
    return Obj
}


module.exports = {get, post}