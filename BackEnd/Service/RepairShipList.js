var RepairShipList = require("../../DB/sequelize/models/RepairShipList")


const Post = {

}

const Get = {
    List : async function(req, res, next) {
        let list = await RepairShipList.findAll()
        let result = {code : 200, result : list}
        return result
    },
    ListGet : async function(req, res, next) {
        let result = await Get.repairShipList()
        return res.send(result)
    },
}


module.exports = {Post, Get};
