'use strict'

// VARIÁVEL
// É um espaço reservado na memória, com a finalidade de armazenar dados que podem ser de vários tipos
// numeros, booleano e string.

// ARRAY
// É um conjunto de dados

// PROPRIEDADE
// É a característica de um objeto, como tamanho e cor

// MÉTODO
// É a ação de um objeto, como mover e adicionar

// OBJETO
// É um conjunto de propriedade e métodos
const aluno = {
     nome: 'ana',
     notas: [1,2,3],
     media: () => (notas)/2
}

// Array de alunos
const alunos = [
    {
        nome: 'ana',
        notas: [1,2,10],
        media: () => (notas)/2
    },
    {
        nome: 'jovanna',
        notas: [6,8,3],
        media: () => (notas)/2
    }
]

console.log(alunos[1].nome)