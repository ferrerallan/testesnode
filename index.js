const express = require('express')

const server = express();
server.use(express.json());

usuarios = ['loro','sara','nina']

server.use((req,res,next)=>{
    console.time('tempo');
    console.log('passou')
    next();
    console.timeEnd('tempo');
})


server.get('/teste',(req,res)=>{
    console.log('testendo');
    const nome = req.query.nome;
    
    return res.json({messagem : `ola mundo ${nome}` });
})

server.get('/users/:id',(req,res)=>{
    console.log('testendo');
    const id = req.params.id;
    
    return res.json({messagem : `usuario ${usuarios[id]}`});
})

server.get('/users',(req,res) =>{
    return res.json(usuarios);
})

server.post('/users',(req,res)=>{
    const {nome} = req.body;
    usuarios.push(nome);

    return res.json(usuarios);
})

humanos = ['sara','allan','zilda'];
server.get('/humanos/:id',(req,res)=>{
    const id = req.params.id;
    return res.json(humanos[id]);
})

server.post('/humanos',(req,res)=>{
    const nome = req.body.nome;
    humanos.push(nome);

    return res.json(humanos);
})


server.listen(3002);

