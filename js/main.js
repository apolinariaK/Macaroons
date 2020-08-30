$(document).ready(function () {
document.getElementById('menu').onclick = function () {
    document.getElementById('header-menu').classList.add('open');
};
document.querySelectorAll('header-menu > *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('header-menu').classList.add('open');
    }
});
});