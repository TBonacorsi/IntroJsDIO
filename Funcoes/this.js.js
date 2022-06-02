function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Ruth',
  idade: 25
}

const pessoa2 = {
  nome: 'Carlos',
  idade: 19
}

const pessoa3 = {
  nome: 'Luisa',
  idade: 35
}

const animas = {
  nome: 'Fiona',
  idade: 2
}

// Como chamar?!
// console.log(calculaIdade.call(const, tempoQueQuerCalcular))
// console.log(calculaIdade.aply(const, [tempoQueQuerCalcular]))
