let get = function(req, res, next) {
    const inquiryId = req.query.id
    let Obj = {
        inquiryId,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const { inquiryId, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = req.body;
    let Obj = { 
        inquiryId, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent,
        userObj : req.user
    }
    return Obj
  }


  module.exports = {get, post}