// primeira parte habilitado/desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // muda o estado da classe .toggle para ativo
    menuToggle.classList.toggle('active');
    // mudar o estado da classe .links para ativo
    links.classList.toggle('active')
}