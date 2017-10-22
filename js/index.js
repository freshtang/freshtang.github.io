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

// 侧边栏按钮
var togside = document.querySelector('#tog-side');
togside.addEventListener('click', function (e) {
    var sidebar = document.querySelector('.sidebar');
    var body = document.querySelector('body');
    var icon = document.querySelector('#tog-side #tog-icon');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        body.classList.remove('open-side');

        icon.classList.remove('fa-reply');
        icon.classList.add('fa-user');
    } else {
        sidebar.classList.add('active');
        body.classList.add('open-side');

        icon.classList.remove('fa-user');
        icon.classList.add('fa-reply');
    }
})