/*****************the part of the arrow*******************/
var arrow = document.getElementById('arrow-top');
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 200) {
        arrow.classList.remove('hide');
    }
}

arrow.onclick = function () {
    window.scrollTo({top: 0, behavior: "smooth"});
}