const { query } = require('express');
const Database = require('../Database')

module.exports = class Concecutivos{
    id = 0;
    numerConcecutivos = 0;
    idUsuarios = 0;
    descripcion = "";
    fecha = "";
    db = new Database('localhost',3306,'metalplast','root','root')

    async getConcecutivos(){
        let conection = this.db.connect();
        let query = "SELECT * FROM CONCECUTIVOS";
        return new Promise(function (resolve,reject) {
            conection.query(query, function (err, rows) {
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

    async getConcecutivo(id){
        let conection = this.db.connect();
        let query = `SELECT * FROM CONCECUTIVOS WHERE ID = ${id}`;
        return new Promise(function (resolve,reject) {
            conection.query(query, function (err,rows){
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

    async createConcecutivo(concecutivo){
        let conection = this.db.connect();
        let query = `INSERT INTO CONCECUTIVOS VALUES (NULL,'${concecutivo.numeroConcecutivo}',${concecutivo.idUsuarios},'${concecutivo.descripcion}','${concecutivo.fecha}')`;
        return new Promise(function (resolve,reject) {
            conection.query(query, function (err) {
                if (err) {
                    conection.end();
                    return reject(err)
                }
                let result = "Concecutivo creado con exito";
                conection.end();
                return resolve(result)
            })
        })
    }

    async updateConcecutivo(id, concecutivo) {
        let conection = this.db.connect();
        let query = `UPDATE CONCECUTIVOS SET NUMEROCONCECUTIVO = '${concecutivo.numeroConcecutivo}', DESCRIPCION = '${concecutivo.descripcion}' WHERE ID = ${id}`;
        return new Promise((resolve, reject) => {
            conection.query(query, (err) => {
                if (err) {
                    conection.end();
                    return reject(err);
                }
                let result = "Concecutivo actualizado con exito";
                conection.end();
                return resolve(result)
            })
        })
    }

    async deleteConcecutivo(id) {
        let conection = this.db.connect();
        let query = `DELETE FROM CONCECUTIVOS WHERE ID = ${id}`;
        return new Promise((resolve, reject) => {
            conection.query(query, (err) => {
                if (err) {
                    conection.end();
                    return reject(err);
                }
                let result = "Concecutivo eliminado con exito";
                conection.end();
                return resolve(result);
            })
        })
    }
}