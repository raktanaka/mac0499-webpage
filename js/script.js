/*!
 * Javascript goes here
 * It really does
 */

// Código do navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyTop()};
// Busca o navbar
var navbar = document.getElementById("navbar");
// Busca o offset do navbar
var sticky = navbar.offsetTop;
// Adiciona a classe sticky ao navbar quando atinge o ponto de rolagem
// Remove a classe sticky do navbar quando sai do limite da rolagem
function stickyTop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}
function hideContent() {
    var list_sections = document.getElementsByTagName("section");
    var i;

    for (i = 0; i < list_sections.length; i++) {
        list_sections[i].className = "hide";
    }
}
function showContent(section_id) {
    hideContent();
//    document.getElementById("landing").className = "hide";
//    document.getElementById("orientadores").className = "hide";
//    document.getElementById("alunos").className = "hide";
//    document.getElementById("descrição").className = "hide";
    document.getElementById(section_id).className = "show";
}