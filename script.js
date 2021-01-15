var collapseMenu = document.querySelector("#collapse-menu");
var collapseButton = document.querySelector("#collapse-button");

collapseButton.addEventListener('click',()=>{
    collapseMenu.classList.toggle('hidden');
    collapseMenu.classList.toggle('flex');
})