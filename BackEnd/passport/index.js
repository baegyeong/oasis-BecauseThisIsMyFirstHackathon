var passport = require("passport")
var local = require("./localStrategy")

var Member = require("../../DB/sequelize/models/Member")


module.exports = () => {

    local();
    
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
      Member.findOne({
        where: { id }
      })
      .then(user => done(null, user))
      .catch(err => done(err));
    });
};