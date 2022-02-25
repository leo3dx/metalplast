const express = require('express')
const Usuarios = require('./models/Usuarios')
const Concecutivos = require('./models/Concecutivos')
const Roles = require('./models/Roles')
const TypeIdentification = require('./models/TypeIdentification')
const cors = require('cors')

const app = express();
const PORT = 3001;



app.use(express.json())
app.use(cors())


// ----------------------------------CRUD DE USUARIOS-------------------------------------
const usuarios = new Usuarios();
// CONSULTAR TODOS LOS USUARIOS
app.get("/usuarios",(req, res) => {
    usuarios.getUsers().then(function(data){
        res.json(data)
    })
})
// CONSULTAR UN USUARIO
app.get("/usuarios/:id",(req, res) => {
    let {params: {id}} = req;
    usuarios.getUser(id).then(function(data){
        res.json(data)
    })
})
// CONSULTAR UN USUARIO POR IDENTIFICACION
app.get("/usuariosByIdentification/:id",(req, res) => {
    let {params: {id}} = req;
    usuarios.getUserByIdentification(id).then(function(data){
        res.json(data)
    })
})
// CREAR UN USUARIO
app.post("/createUser",(req, res) => {
    let {body: newUser} = req;
    usuarios.createUser(newUser).then(function(data){
        res.status(201).json({
            message : data
        })
    }).catch(function(err){
        res.json({
            message : 'Usuario no creado', err
        })
    })
})
// ELIMINAR UN USUARIO
app.delete("/deleteUser/:id",(req, res) => {
    let {params: {id}} = req;
    usuarios.deleteUser(id).then(function(data) {
        res.json({
            message : data
        })
    }).catch(function(err){
        res.json({
            message : 'Usuario no creado', err
        })
    })
})
// ACTUALIZAR UN USUARIO
app.put("/updateUser/:id",(req, res) => {
    let {params: {id}, body} = req;
    usuarios.updateUser(id, body).then(function(data) {
        res.json({
            message : data
        })
    }).catch(function(err){
        res.json({
            message : 'Usuario no actualizado', err
        })
    })
})
// ----------------------------------CRUD DE CONCECUTIVOS-------------------------------------
// CONSULTAR TODOS LOS CONCECUTIVOS
const concecutivos = new Concecutivos();
app.get("/concecutivos", (req, res) => {
    concecutivos.getConcecutivos().then(function(data){
        res.json(data)
    })
})
// CONSULTAR UN CONCECUTIVO
app.get("/concecutivos/:id", (req, res) => {
    let {params: {id}} = req;
    concecutivos.getConcecutivo(id).then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json({
            message: err
        })
    })
})
// CREAR CONCECUTIVOS
app.post("/createConcecutivo",(req, res) => {
    let {body: newConcecutivo} = req;
    concecutivos.createConcecutivo(newConcecutivo).then(function(data){
        res.status(201).json({
            message : data
        })
        }).catch(function(err){
            res.json({
                message: "Concecutivo no creado", err
            })
        })
})
// ACTUALIZAR UN CONCECUTIVO
app.put("/updateConcecutivo/:id",(req, res) => {
    let {params: {id}, body} = req;
    concecutivos.updateConcecutivo(id,body).then(function(data){
        res.json({
            message: data
        })
    }).catch(function(err){
        res.json({
            message: "Concecutivo no actualizado", err
        })
    })
})
// ELIMINAR UN CONCECUTIVO
app.delete("/deleteConcecutivo/:id",(req, res) => {
    let {params: {id}} = req;
    concecutivos.deleteConcecutivo(id).then(function(data){
        res.json({
            message: data
        })
    }).catch(function(err) {
        res.json({
            message: "Concecutivo no eliminado", err
        })
    })
})

// ----------------------------------CRUD DE ROL-------------------------------------
// CONSULTAR ROLES
const roles = new Roles();
app.get("/roles", (req, res) => {
    roles.getRoles().then(function(data){
        res.json(data)
    })
})

// ----------------------------------CRUD DE tTIPOS DE IDENTIFICACION-------------------------------------
// CONSULTAR ROLES
const typeIdentifications = new TypeIdentification();
app.get("/tipoIdentificaciones", (req, res) => {
    typeIdentifications.getTypeIdentificacion().then(function(data){
        res.json(data)
    })
})
// ------------------------------ESCUCHA DEL SERVIDOR----------------------------------
app.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:"+PORT)
});
