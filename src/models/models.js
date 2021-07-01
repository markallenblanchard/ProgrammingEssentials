import sequelize from 'sequelize';


const User = sequelize.define('User', {
  "first_name",
  "last_name",
  "age",
  "number_of_sessions"
})

const Group = sequelize.define('Group', {
  "group_name"
})
const Reading = sequelize.define('Reading', {
  "reading_name",
  "reading_source"
})

//
// group to reading relationship is many to many
// group to user relationship is many to many
// • use join table, two columns: groupId, UserId
// checkout sql indexes

/**
 * idx | book | user
 *
 */

/*
  if I want to email all my subscribers, how would i do it?
  • how do you know how many users (& emails) you need to send?
  • you query the database and count -- perhaps using a Scheduled Job, which most likely lives in the server-side code
  • you can trigger some request and run query off that
*/

/*

*/
