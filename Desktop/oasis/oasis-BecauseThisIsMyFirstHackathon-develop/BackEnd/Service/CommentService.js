var Comment = require("../../DB/sequelize/models/Comment")

const Post = {
    comment : async function(CommentDTO, res, next){
        const {reviewId, inquiryId, commnetParentId, commentContent, commentDepth, userObj} = CommentDTO
        if(reviewId){
            let comment = await Comment.create({ReviewId : reviewId, commentDepth, commnetParentId, commentContent, memberId : userObj.id})
            let result = {code : 200, result : comment}
            return result
        } else {
            let comment = await Comment.create({InquiryId : inquiryId, commentDepth, commnetParentId, commentContent, memberId : userObj.id})
            let result = {code : 200, result : comment}
            return result
        }
    },
    commentPost : async function(CommentDTO, res, next) {
        let result = await Post.comment(CommentDTO)
        return res.send(result)
    },
}
const Get = {
    comment : async function(CommentDTO, res, next) {
        const {reviewId, inquiryId, userObj} = CommentDTO        
        if(reviewId){
            let comment = await Comment.findAll({where : {reviewId}})
            let result = {code :200, result : comment}
            return result
        } else {
            let comment = await Comment.findAll({where : {inquiryId}})
            let result = {code :200, result : comment}
            return result
        }
    },
    commentGet : async function(CommentDTO, res, next) {
        let result = await Get.comment(CommentDTO)
        return res.send(result)
    }
}

// 추후구현
const Update = {
    
}

const Delete = {
    
}

module.exports = {Post, Get, Update, Delete};
