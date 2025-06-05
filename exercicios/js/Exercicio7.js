const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const resp3 = document.querySelector("h5")

frm.addEventListener("submit", (e)=>{
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)
    const entrada = Math.round(preco / 2)
    const parcelas = Math.round(entrada / 12)

    resp1.innerText = `Veiculo: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada}`
    resp3.innerText = `+ 12x de R$: ${parcelas}`
    e.preventDefault()
})