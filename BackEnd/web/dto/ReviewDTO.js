module.exports = function ReviewDTO (req, res, next) {
    const { reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent } = req.body;
    let Obj = { 
        reviewId, reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent,
        userObj : req.user
    }
    return Obj
  }