async function buscaEndereco(cep){
  let mensagemErro = document.querySelector('#erro')
  let cidade = document.querySelector('#cidade')
  let logradouro = document.querySelector('#endereco')
  let estado = document.querySelector('#estado')
  let bairro = document.querySelector('#bairro')

  cidade.value = ''
  logradouro.value = ''
  estado.value = ''
  bairro.value = ''
  mensagemErro.innerHTML = ''
  try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json()
    if(consultaCEPConvertida.erro){
      throw Error('Cep não existente!')
    }
    
    cidade.value = consultaCEPConvertida.localidade
    logradouro.value = consultaCEPConvertida.logradouro
    estado.value = consultaCEPConvertida.uf
    bairro.value = consultaCEPConvertida.bairro
    console.log(consultaCEPConvertida)   
    return consultaCEPConvertida
  } catch(erro){
    mensagemErro.innerHTML = '<p>CEP inválido. Tente novamente!</p>'
    console.log(erro)
  }
}


let cep = document.querySelector('#cep')

cep.addEventListener('focusout', () => {
  buscaEndereco(cep.value)
})

// buscaEndereco('01001000')

// mais de uma chamada \/
// let ceps = ['01001000', '12248140']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

  // .then(resposta => resposta.json())
  // .then(r => {
  //   if(r.erro){
  //     throw Error('Esse cep não existe')
  //   }else{
  //     console.log(r)    
  //   }
  // })
  // .catch(err => console.log(err))
  // .finally(mensagem => console.log('Processamento concluido!'))

// console.log(consultaCEP)