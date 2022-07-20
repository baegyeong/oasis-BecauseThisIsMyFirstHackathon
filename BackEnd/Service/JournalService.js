var Journal = require("../../DB/sequelize/models/Journal")

const Post = {
    record : async function (JournalDTO, res, next) {
        const { journalId, journalDate, journalHours, journalEtc, userObj } = JournalDTO;
        let record = await Journal.create({journalId, journalDate, journalHours, journalEtc, MemberId : userObj.id})
        let result = {code : 200, result : record}
        return result
    },
    recordPost : async function(JournalDTO, res, next) {
        let result = await Post.record(JournalDTO)
        return res.send(result)
    }
}

// 페이징 고려
const Get = {
    record : async function (JournalDTO, res, next) {
        const {userObj} = JournalDTO
        let record = await Journal.findAll({where : {MemberId : userObj.id}})
        let result = {code : 200, result : record}
        return result
    },
    recordGet : async function (JournalDTO, res, next) {
        let result = await Get.record(JournalDTO)
        return res.send(result)
    },
    list : async function (JournalDTO, res, next) {
        const {userObj} = JournalDTO
        let list = await Journal.findAll({attributes: ["id", "reviewDate"]},{where : {MemberId : userObj.id}})
        let result = {code : 200, result : list}
        return result
    },
    listGet : async function (JournalDTO, res, next) {
        let result = await Get.list(JournalDTO)
        return res.send(result)
    },
    each : async function(JournalDTO, res, next) {
        const { journalId, journalDate, journalHours, journalEtc, userObj } = JournalDTO;
        let each = await Journal.findOne({where : {id : journalId}})
        let result = {code : 200, result : each}
        return result
    },
    eachGet : async function(JournalDTO, res, next) {
        let result = await Get.each(JournalDTO)
        return res.send(result)
    }
    // 추후 구현
    // user : async function () {
    //     const { reviewCategory, reviewTitle, reviewAuthor, reviewCount, reviewContent, userObj } = JournalDTO;
    // }
}

const Update = {
    record : async function (JournalDTO, res, next) {
        const { journalId, journalDate, journalHours, journalEtc, userObj } = JournalDTO;
        var deleteObj = await Delete.record(JournalDTO)
        if(deleteObj.code == 200) {
            var record = await Post.record(JournalDTO)
            let result = {code : 200, result : record}
            return result
        }
    },
    recordUpdate : async function(JournalDTO, res, next) {
        let result = await Update.record(JournalDTO)
        return res.send(result)
    },
}

const Delete = {
    record : async function (JournalDTO, res, next) {
        const { journalId, journalDate, journalHours, journalEtc, userObj } = JournalDTO;
        let record = await Journal.destroy({where : {id : journalId }})
        let result = {code :200, result : record}
        return result
    },
    recordDelete : async function (JournalDTO, res, next) {
        let result = await Delete.record(JournalDTO)
        return res.send(result)
    }
}

// 추후 검색 구현
const Search = {

}


module.exports = {Post, Get, Update, Delete, Search};
