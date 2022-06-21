const { async } = require("@firebase/util");
const crud = require("./crud");

async function buscarDadosId() {
    const dados = await crud.getById("pessoas", "LmjcaeVcrFo55iFxuA2A");
    console.log(dados);
}

async function deletar() {
    const dados = await crud.remove("pessoas", "LmjcaeVcrFo55iFxuA2A");
    console.log(dados);
}

buscarDadosId();

// async function buscarDados() {
//     const dados = await crud.get("pessoas");
//     console.log(dados);
// }

// buscarDados();

// async function salvarDado() {
//     const savedData = await crud.save("pessoas", "LmjcaeVcrFo55iFxuA2A", { nome: "Otavio", sobrenome: "Neves", idade: 17 })
//     console.log(savedData);
// }

// salvarDado();

// .then(resultado => {
//     console.log(resultado)
// })