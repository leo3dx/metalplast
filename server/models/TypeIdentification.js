const Database = require('../Database')

module.exports = class TypeIdentification{
    id = 0;
    nombreIdentificacion="";
    db = new Database('localhost',3306,'metalplast','root','root');

    async getTypeIdentificacion(){
        let conection = this.db.connect();
        let query = "SELECT * FROM TYPEIDENTIFICATION";
        return new Promise((resolve, reject) =>{
            conection.query(query,function(err,rows){
                if(err){
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