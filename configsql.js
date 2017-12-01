var configsql = {}

configsql.username = process.env.SQL_username ;
configsql.password = process.env.SQL_password ; 
configsql.server = process.env.SQL_Server || 'sensorstudyserver.database.windows.net';
configsql.options = {encrypt: true, database: process.env.SQL_Server || 'sportstrackersql'}  

module.exports = configsql;

