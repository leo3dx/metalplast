const Database = require('../Database');

module.exports = class Usuarios{
    id = 0;
    firstName = "";
    lastName = "";
    lastName2 = "";
    typeIdentification = 0;
    identification = "";
    role = 0;
    email = "";
    phone = "";
    address = "";
    db = new Database('localhost',3306,'metalplast','root','root');

    constructor(id, firstName, lastName, lastName2, typeIdentification, identification, role, email, phone, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastName2 = lastName2;
        this.typeIdentification = typeIdentification;
        this.identification = identification;
        this.role = role;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    async getUsers(){
        let conection = this.db.connect();
        let query = "SELECT * FROM USUARIOS";
        return new Promise(function (resolve,reject) {
            conection.query(query, function(err,rows, fields) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = rows
                conection.end();
                return resolve(result)
            })
        })  
    }

    async getUser(id){
        let conection = this.db.connect();
        let query = "SELECT * FROM USUARIOS WHERE id =" + id;
        return new Promise(function (resolve,reject) {
            conection.query(query, function(err,rows, fields) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = rows
                conection.end();
                return resolve(result)
            })
        })  
    }

    async getUserByIdentification(id){
        let conection = this.db.connect();
        let query = "SELECT * FROM USUARIOS WHERE IDENTIFICATION =" + id;
        return new Promise(function (resolve,reject) {
            conection.query(query, function(err,rows, fields) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = rows
                conection.end();
                return resolve(result)
            })
        })  
    }

    async createUser(newUser){
        let conection = this.db.connect();
        let query = `INSERT INTO USUARIOS VALUES (null,'${newUser.firstName}','${newUser.lastName1}','${newUser.lastName2}',${newUser.typeIdentification},'${newUser.identification}',${newUser.role},'${newUser.email}','${newUser.phone}','${newUser.addres}')`;
        return new Promise(function (resolve,reject) {
            conection.query(query, function(err) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = "Usuario creado"
                conection.end();
                return resolve(result)
            })
        })  
    }

    async deleteUser(id){
        let conection = this.db.connect();
        let query = "DELETE FROM USUARIOS WHERE ID = " + id;
        return new Promise(function (resolve,reject) {
            conection.query(query, function(err) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = "Usuario eliminado exitosamente";
                conection.end();
                return resolve(result)
            })
        })
    }

    async updateUser(id, user) {
        let conection = this.db.connect();
        let query = `UPDATE USUARIOS SET FIRSTNAME = '${user.firstName}', LASTNAME1 = '${user.lastName1}', LASTNAME2 = '${user.lastName2}', TYPEIDENTIFICATION = ${user.typeIdentification}, IDENTIFICATION = '${user.identification}', ROLE = ${user.role}, EMAIL = '${user.email}', PHONE = '${user.phone}', ADDRES = '${user.addres}' WHERE ID = ${id}`;
        return new Promise((resolve, reject) => {
            conection.query(query, function (err){
                if (err) {
                    conection.end();
                    return reject(err);
                }
                let result = "Usuario actualizado con exitos";
                conection.end();
                return resolve(result);
            })
        })
    }
}