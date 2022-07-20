let get = function (req, res, next) {
    const reviewId = req.query.id
    let Obj = {
        reviewId,
        userObj : req.user
    }
    return Obj
}

let post = function (req, res, next) {
    const { reviewId, reviewCategory, repairShipCenter, reviewTitle, reviewAuthor, reviewCount, reviewContent } = req.body;
    let Obj = { 
        reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent,repairShipCenter,
        userObj : req.user
    }
    return Obj
}


module.exports = {get, post} 