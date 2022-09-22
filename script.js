async function buscaEndereco(cep){
  try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json()
    // console.log(consultaCEPConvertida)   
    return consultaCEPConvertida
  } catch(erro){
    console.log(erro)
  }
}

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