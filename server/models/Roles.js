const Database = require('../Database')

module.exports = class Roles{
    id = 0;
    nombreRole = ""
    db = new Database('localhost',3306,'metalplast','root','root');

    async getRoles(){
        let conection = this.db.connect();
        let query = `SELECT * FROM ROLES`;
        return new Promise(function(resolve, reject){
            conection.query(query, function(err,rows){
                if (err) {
                    conection.end();
                    return reject(err);
                }
                let result = rows;
                conection.end();
                return resolve(result);
            })
        })
    }
}