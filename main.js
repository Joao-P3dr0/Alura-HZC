// function abrirFechar() {
//     const menuLateral = document.querySelector('.menu-lateral');
//     const menu = document.querySelector('.cabecalho__menu');
    
//     menu.addEventListener ('click', () => {
//         if (menuLateral.style.display === "none") {
//             menuLateral.style.display = "block"
//         }else {
//             menuLateral.style.display = "none"
//         }
//     })
// }



const menu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

// ao click faz o menu lateral sumir da tela
menu.addEventListener('click', ()=> {
    menuLateral.classList.toggle('ativo2')
})

