let get = function(req, res, next) {
    const journalId = req.query.id
    let Obj = {
        journalId,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const { journalId, journalDate, journalHours, journalEtc } = req.body;
    let Obj = { 
        journalId, journalDate, journalHours, journalEtc,
        userObj : req.user
    }
    return Obj
  }


  module.exports = {get, post}