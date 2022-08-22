const axios = require('axios');

async function conselho() {

    try {
        const url = 'https://api.adviceslip.com/advice'
        const resposta = await axios.get(url)
        const armazenar = resposta.data.slip.advice
        console.log(`Conselho sem tradução: ${armazenar}`)
        
        const site = `https://api.funtranslations.com/translate/valyrian.json?text=${armazenar}`
        const resultado = await axios.get(site)
        const salvar = resultado.data.contents.translated
        console.log(`Texto traduzido para a linguagem valyrian: ${salvar}`)


    } catch (error) {
        console.log("Erro na sua aplicação")
        console.log(error)
    }





}
conselho()