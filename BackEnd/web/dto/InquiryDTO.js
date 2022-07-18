module.exports = function InquiryDTO (req, res, next) {
    const { inquiryId, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = req.body;
    let Obj = { 
        inquiryId, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent,
        userObj : req.user
    }
    return Obj
  }