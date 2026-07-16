function mostrarMensagem(filme){
    alert("Você selecionou: " + filme);
}

const curiosidades = [
    "🦖 O T-Rex de Jurassic Park apareceu por apenas cerca de 15 minutos no primeiro filme.",
    "🎬 Steven Spielberg dirigiu o primeiro e o segundo filme.",
    "🧬 Os dinossauros foram criados usando DNA de mosquito preservado em âmbar.",
    "🏆 Jurassic Park ganhou 3 Oscars de efeitos visuais, som e edição de som.",
    "🦕 O Velociraptor do filme é bem maior do que os encontrados na vida real.",
    "A vida encontra um caminho. — Ian Malcolm",
    "Se eles conseguiram fazer isso, será que deveriam?",
    "Bem-vindos ao Jurassic Park. — John Hammond",
    "Os cientistas estavam tão preocupados em saber se podiam que não pararam para pensar se deviam. — Ian Malcolm"
];

const botao = document.getElementById("btnCuriosidade");
const texto = document.getElementById("textoCuriosidade");

botao.addEventListener("click", () => {
    let numero = Math.floor(Math.random() * curiosidades.length);
    texto.innerHTML = curiosidades[numero];
});
