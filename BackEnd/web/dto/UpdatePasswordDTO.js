module.exports = async function UpdatePassword (req, res, next) {
    const { memberNumber, memberPassword } = req.body;
    var Obj = { memberNumber, memberPassword }
    return Obj
}