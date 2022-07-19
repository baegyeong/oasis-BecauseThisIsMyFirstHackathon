var Inquiry = require("../../DB/sequelize/models/Inquiry")

const Post = {
    record : async function (InquiryDTO, res, next) {
        const { inquiryTitle, inquiryCount, inquiryContent, userObj } = InquiryDTO;
        let inquiry = await Inquiry.create({inquiryTitle, inquiryAuthor : userObj.memberName, inquiryCount, inquiryContent, MemberId : userObj.id})
        let result = {code : 200, result : inquiry}
        return result
    },
    recordPost : async function(InquiryDTO, res, next) {
        let result = await Post.record(InquiryDTO)
        return res.send(result)
    }
}

// 페이징 고려
const Get = {
    record : async function (InquiryDTO, res, next) {
        let inquiry = await Inquiry.findAll()
        let result = {code : 200, result : inquiry}
        return result
    },
    recordGet : async function (InquiryDTO, res, next) {
        let result = await Get.record()
        return res.send(result)
    },
    // 확인
    list : async function (InquiryDTO, res, next) {
        let list = await Inquiry.findAll({attributes: ["id", "inquiryTitle", "inquiryAuthor", "inquiryCount"]})
        let result = {code : 200, result : list}
        return result
    },
    listGet : async function (InquiryDTO, res, next) {
        let result = await Get.list()
        return res.send(result)
    },
    each : async function(InquiryDTO, res, next) {
        const { inquiryId, inquiryCategory, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = InquiryDTO;
        let each = await Inquiry.findOne({where : {id : inquiryId}})
        let result = {code : 200, result : each}
        return result
    },
    eachGet : async function(InquiryDTO, res, next) {
        let result = await Get.each(InquiryDTO)
        return res.send(result)
    }
    // 추후 구현
    // user : async function () {
    //     const {  inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent, userObj } = InquiryDTO;
    // }
}

const Update = {
    record : async function (InquiryDTO, res, next) {
        const { inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = InquiryDTO;
        var deleteObj = await Delete.record(InquiryDTO)
        if(deleteObj.code == 200) {
            var record = await Post.record(InquiryDTO)
            let result = {code : 200, result : record}
            return result
        }
    },
    recordUpdate : async function(InquiryDTO, res, next) {
        let result = await Update.record(InquiryDTO)
        return res.send(result)
    },
    // 조회수 카운트 증가 프런트에 부탁
    // 추후구현
    count : async function (InquiryDTO, res, next) {
        const { inquiryId, inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = InquiryDTO;
        let count = await Inquiry.update({inquiryCount},{where : {id : inquiryId}})
        let result = {code : 200, result : count}
        return result
 
    },
    countUpdate : async function (InquiryDTO, res, next) {
        let result = await Update.count(InquiryDTO)
        return res.send(result)
    }
}

const Delete = {
    record : async function (InquiryDTO, res, next) {
        const { inquiryId,  inquiryTitle, inquiryAuthor, inquiryCount, inquiryContent } = InquiryDTO;
        let record = await Inquiry.destroy({where : {id : inquiryId }})
        let result = {code :200, result : record}
        return result
    },
    recordDelete : async function (InquiryDTO, res, next) {
        let result = await Delete.record(InquiryDTO)
        return res.send(result)
    }
}

// 추후 검색 구현
const Search = {

}


module.exports = {Post, Get, Update, Delete, Search};
