const mysql = require('mysql')

module.exports =  class Database{
    host;
    port;
    database;
    user;
    password;
    conexion;

    constructor(host, port, database, user, password){
        this.host = host;
        this.port = port;
        this.database = database;
        this.user = user;
        this.password = password;
    }

    connect(){
        this.conexion = mysql.createConnection({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.user,
            password: this.password
        })

        this.conexion.connect(function(err){
            if (err) {
                console.error('Error de conexion: ' + err);
                return;
            }
            // console.log('Conectado con el identificador ' + this.conexion.threadId);
            console.log("Conectado")
        })
        return this.conexion;
    }

    close(){
        this.conexion.end(function(){
            console.log("Disconect")
        })
    }
}   
