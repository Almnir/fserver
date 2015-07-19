var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
    connectionstring: 'Data Source=ALMHOME;Initial Catalog=almbase;Integrated Security=True;'
};

module.exports = config[env];
