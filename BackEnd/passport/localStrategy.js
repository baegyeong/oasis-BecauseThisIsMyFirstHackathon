const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

var Member = require("../../DB/sequelize/models/Member")


module.exports = () => {
  passport.use(new LocalStrategy(
  {
    usernameField: 'memberNumber',
    passwordField: 'memberPassword',
  }, 
  async (memberNumber, memberPassword, done) => {
      try {
        const exUser = await Member.findOne({ where: { memberNumber } });
        if (exUser) {
          const result = await bcrypt.compare(memberPassword, exUser.memberPassword);
          if (result) {
            done(null, exUser);
          } else {
            done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
          };
        } else {
          done(null, false, { message: '가입되지 않은 회원입니다.' });
        };
      } catch (error) {
        console.error(error);
        done(error);
      }
    }
  ));
};
