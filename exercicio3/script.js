const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

let maiusculas = Object.keys(infosPessoa).map(e => e = e.toUpperCase());

console.log(infosPessoa)
console.log(maiusculas);

const valores = Object.keys(infosPessoa).map((prop, valor) => {
    console.log(`O valor da propriedade ${prop} é ${valor}.`);
    return (`O valor da propriedade ${prop} é ${valor}.`);
})

console.log(valores)