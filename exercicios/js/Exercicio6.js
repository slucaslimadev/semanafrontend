// Criar uma referência ao form e aos elementos h3 e h4

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const respo2 = document.querySelector("h4")

// criar evento com o botão submit

frm.addEventListener("submit",(e)=>{

    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)
    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60
    resp.innerText = titulo
    respo2.innerText = `${horas} hora e ${minutos} minuto(s)`
    e.preventDefault() 
})
