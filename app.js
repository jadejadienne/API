const express = require('express');
const app = express();


//Definindo ua rota simples

app.get('/', (req, res) =>{
    res.send('Olá, Mundo!');
});

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')
});


const usuarios =[

    {id: 1, nome: 'jadienne'},
    {id: 2, nome: 'Charles'}

];

app.get('/usuarios', (req, res) =>{
    res.json(usuarios);

});


//q1:

// ele pega o araty de usuario com os paremetros de requerimento e resposta
app.get('/usuarios',(req, res) => {
    const {nome} = req.body;

    if(!nome){
        return res.status(400).json({error: 'Nome é obrigatorio'});
    }

     // Criando um novo usuário com um id único (no caso, o id é o próximo número disponível)
     const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome
    };

    // Adicionando o novo usuário ao array
    usuarios.push(novoUsuario);

    // Retornando a resposta com o novo usuário
    res.status(201).json(novoUsuario);
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

    


