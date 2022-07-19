var Notice = require("../../DB/sequelize/models/Notice")

const Post = {
    record : async function (noticeDTO, res, next) {
        const { noticeTitle, noticeAuthor, noticeCount, noticeContent, userObj } = noticeDTO;
        let notice = await Notice.create({noticeTitle, noticeAuthor : userObj.memberName, noticeCount, noticeContent, MemberId : userObj.id})
        let result = {code : 200, result : notice}
        return result
    },
    recordPost : async function(noticeDTO, res, next) {
        let result = await Post.record(noticeDTO)
        return res.send(result)
    }
}

// 페이징 고려
const Get = {
    record : async function (noticeDTO, res, next) {
        let notice = await Notice.findAll()
        let result = {code : 200, result : notice}
        return result
    },
    recordGet : async function (noticeDTO, res, next) {
        let result = await Get.record()
        return res.send(result)
    },
    // 확인
    list : async function (noticeDTO, res, next) {
        let list = await Notice.findAll({attributes: ["id", "noticeTitle", "noticeAuthor", "noticeCount"]})
        let result = {code : 200, result : list}
        return result
    },
    listGet : async function (noticeDTO, res, next) {
        let result = await Get.list()
        return res.send(result)
    },
    each : async function(noticeDTO, res, next) {
        const { noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent } = noticeDTO;
        let each = await Notice.findOne({where : {id : noticeId}})
        let result = {code : 200, result : each}
        return result
    },
    eachGet : async function(noticeDTO, res, next) {
        let result = await Get.each(noticeDTO)
        return res.send(result)
    }
    // 추후 구현
    // user : async function () {
    //     const {  noticeTitle, noticeAuthor, noticeCount, noticeContent, userObj } = noticeDTO;
    // }
}

const Update = {
    record : async function (noticeDTO, res, next) {
        const { noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent  } = noticeDTO;
        var deleteObj = await Delete.record(noticeDTO)
        if(deleteObj.code == 200) {
            var record = await Post.record(noticeDTO)
            let result = {code : 200, result : record}
            return result
        }
    },
    recordUpdate : async function(noticeDTO, res, next) {
        let result = await Update.record(noticeDTO)
        return res.send(result)
    },
    // 조회수 카운트 증가 프런트에 부탁
    // 추후구현
    count : async function (noticeDTO, res, next) {
        const { noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent  } = noticeDTO;
        let count = await Notice.update({noticeCount},{where : {id : noticeId}})
        let result = {code : 200, result : count}
        return result
 
    },
    countUpdate : async function (noticeDTO, res, next) {
        let result = await Update.count(noticeDTO)
        return res.send(result)
    }
}

const Delete = {
    record : async function (noticeDTO, res, next) {
        const { noticeId, noticeTitle, noticeAuthor, noticeCount, noticeContent  } = noticeDTO;
        let record = await Notice.destroy({where : {id : noticeId }})
        let result = {code :200, result : record}
        return result
    },
    recordDelete : async function (noticeDTO, res, next) {
        let result = await Delete.record(noticeDTO)
        return res.send(result)
    }
}

// 추후 검색 구현
const Search = {

}


module.exports = {Post, Get, Update, Delete, Search};
