module.exports=  async function JoinDTO (req, res, next) {
  const { memberNumber, memberPassword, memberName } = req.body;
  let Obj = { memberNumber, memberPassword, memberName }
  return Obj
}