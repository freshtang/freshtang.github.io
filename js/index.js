// 移动端导航栏按钮
var tog = document.querySelector('nav button');
tog.addEventListener('click', function (e) {
    var a = document.querySelector('nav');
    var wrap = document.querySelector('nav .nar-wrap');
    if (a.classList.contains('dropdown')) {
        a.classList.remove('dropdown');
        wrap.style.height = 0;
    } else {
        var li = document.querySelectorAll('nav .nav li');
        a.classList.add('dropdown');
        wrap.style.height = li.length * 40 + 'px';
    }
})