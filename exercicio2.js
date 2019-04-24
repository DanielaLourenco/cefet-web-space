// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = "https://fegemo.github.io/cefet-web/images/",
  todasAsImagens = [
    "philae-parts.jpg",
    "philae-rosetta.jpg",
    "philae-separation.jpg",
    "philae-67-picture.jpg",
    "philae-collecting.jpg"
  ];
  
let index = 0;

document.querySelector("#anterior").addEventListener("click", function(e)
{
  index--;
  if(index < 0) 
    index = todasAsImagens.length - 1;
  
  document.querySelector("#slide").src = servidorDasImagens + todasAsImagens[index];
});

document.querySelector("#proximo").addEventListener("click", function(e) 
{
  index++;
  if(index >= todasAsImagens.length)
    index = 0;
  
  document.querySelector("#slide").src = servidorDasImagens + todasAsImagens[index];
});