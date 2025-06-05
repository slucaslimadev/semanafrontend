//comentário uma linha
/*   comentário múltiplas linhas */
//alert("JFono beta 1.0")
// const nome = prompt("Qual o seu nome?")
//console.log("Olá "+nome+" Seja bem vindo ao JFono beta 1.0")
         
const frm = document.querySelector("form")
const nome = document.getElementById("inNome")
//evento
//  .value

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(nome.value)
   
})