const Sequelize = require('sequelize');
const Inquiry = require('./Inquiry');
const Journal = require('./Journal');
const Member = require('./Member');
const Review = require('./Review');
const Comment = require('./Comment');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];


// connecting to a database
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

const db = {};
db.sequelize = sequelize; 
db.Member = Member
db.Review = Review
db.Journal = Journal
db.Inquiry = Inquiry
db.Comment = Comment


// Sequelize adds a getter & a setter for each attribute defined through Model.init
Member.init(sequelize)
Review.init(sequelize)
Journal.init(sequelize)
Inquiry.init(sequelize)
Comment.init(sequelize)

Member.associate(db)
Review.associate(db)
Journal.associate(db)
Inquiry.associate(db)
Comment.associate(db)

module.exports = db;