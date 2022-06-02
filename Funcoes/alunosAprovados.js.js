const alunos = [
  {
    nome: 'Marcos',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Julia',
    nota: 8,
    turma: '1B'
  },
  {
    nome: 'Rafael',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Ana',
    nota: 4.9,
    turma: '1B'
  }
]

function alunosAprovados(alunos, media) {
  let aprovados = []

  for (let i = 0; i < alunos.lenght; i++) {
    const { nota, nome } = alunos[i]

    if (nota >= media) {
      aprovados.push(arr[i].nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))
