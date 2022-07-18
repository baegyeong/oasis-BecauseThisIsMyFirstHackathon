var Review = require("../../DB/sequelize/models/Review")

const Post = {
    record : async function (ReviewDTO, res, next) {
        const { reviewCategory, reviewTitle, reviewCount, reviewContent, userObj } = ReviewDTO;
        let review = await Review.create({reviewCategory, reviewTitle, reviewAuthor : userObj.memberName, reviewCount, reviewContent, MemberId : userObj.id})
        let result = {code : 200, result : review}
        return result
    },
    recordPost : async function(ReviewDTO, res, next) {
        let result = await Post.record(ReviewDTO)
        return res.send(result)
    }
}

// 페이징 고려
const Get = {
    record : async function (ReviewDTO, res, next) {
        let review = await Review.findAll()
        let result = {code : 200, result : review}
        return result
    },
    recordGet : async function (ReviewDTO, res, next) {
        let result = await Get.record()
        return res.send(result)
    },
    list : async function (ReviewDTO, res, next) {
        let list = await Review.findAll({attributes: ["id", "reviewTitle", "reviewAuthor", "reviewCount"]})
        let result = {code : 200, result : list}
        return result
    },
    listGet : async function (ReviewDTO, res, next) {
        let result = await Get.list()
        return res.send(result)
    },
    each : async function(ReviewDTO, res, next) {
        const { reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent } = ReviewDTO;
        let each = await Review.findOne({where : {id : reviewId}})
        let result = {code : 200, result : each}
        return result
    },
    eachGet : async function(ReviewDTO, res, next) {
        let result = await Get.each(ReviewDTO)
        return res.send(result)
    }
    // 추후 구현
    // user : async function () {
    //     const { reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent, userObj } = ReviewDTO;
    // }
}

const Update = {
    record : async function (ReviewDTO, res, next) {
        const { reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent } = ReviewDTO;
        var deleteObj = await Delete.record(ReviewDTO)
        if(deleteObj.code == 200) {
            var record = await Post.record(ReviewDTO)
            let result = {code : 200, result : record}
            return result
        }
    },
    recordUpdate : async function(ReviewDTO, res, next) {
        let result = await Update.record(ReviewDTO)
        return res.send(result)
    },
    // 조회수 카운트 증가 프런트에 부탁
    // 추후구현
    count : async function (ReviewDTO, res, next) {
        const { reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent } = ReviewDTO;
        let count = await Review.update({reviewCount},{where : {id : reviewId}})
        let result = {code : 200, result : count}
        return result
 
    },
    countUpdate : async function (ReviewDTO, res, next) {
        let result = await Update.count(ReviewDTO)
        return res.send(result)
    }
}

const Delete = {
    record : async function (ReviewDTO, res, next) {
        const { reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent } = ReviewDTO;
        let record = await Review.destroy({where : {id : reviewId }})
        let result = {code :200, result : record}
        return result
    },
    recordDelete : async function (ReviewDTO, res, next) {
        let result = await Delete.record(ReviewDTO)
        return res.send(result)
    }
}

// 추후 검색 구현
const Search = {

}


module.exports = {Post, Get, Update, Delete, Search};
