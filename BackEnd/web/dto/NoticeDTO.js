let get = function(req, res, next) {
    const noticeId = req.query.id
    let Obj = {
        noticeId,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const { noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent } = req.body;
    let Obj = { 
        noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent,
        userObj : req.user
    }
    return Obj
  }


module.exports = {get, post}