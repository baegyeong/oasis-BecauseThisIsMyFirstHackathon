let get = function(req, res, next) {
    const {reviewId, inquiryId} = req.query
    let Obj = {
        reviewId, inquiryId,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const {reviewId, inquiryId, commnetParentId, commentContent} = req.body
    if(commnetParentId != undefined) {
        let commentDepth = 2
        let Obj = {
            reviewId, inquiryId, commnetParentId, commentContent, commentDepth,
            userObj : req.user
        }
        return Obj
    } else {
        let commentDepth = 1
        let Obj = {
            reviewId, inquiryId, commnetParentId, commentContent, commentDepth,
            userObj : req.user
        }
        return Obj
    }


  }


  module.exports = {get, post}