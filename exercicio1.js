// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let lstBotoes = document.querySelectorAll(".botao-expandir-retrair");

for (let i = 0; i < lstBotoes.length; i++) 
{
  lstBotoes[i].addEventListener("click", function(e) 
  {        
    let botaoAtivado = e.currentTarget;	
    let paragrafo = botaoAtivado.parentNode;
    let simbolo = botaoAtivado.innerHTML;

	botaoAtivado.innerHTML = (simbolo === "+" ? "-" : "+");	
       
	paragrafo.classList.toggle("expandido");
  });
};
