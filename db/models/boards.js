const db = require('../');
const Promise = require('bluebird');

const Board = db.Model.extend({
  tableName: 'boards',
  users: function() {
    return this.belongsToMany('User');
  },
  owner: function() {
    return this.belongsTo('User', 'owner_id');
  },
  tickets: function() {
    return this.hasMany('Ticket');
  },
  panels: function() {
    return this.hasMany('Panel');
  }
});

module.exports = db.model('Board', Board);