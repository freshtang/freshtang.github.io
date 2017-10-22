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
});

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
});

var topBtn = document.querySelector('#to-top');
topBtn.addEventListener('click', function (e) {
    smoothscroll();
});

 //滚动条滚动时触发
var clientHeight = document.documentElement.clientHeight;
window.onscroll = function() {
   var osTop = document.documentElement.scrollTop || document.body.scrollTop;
   if (osTop >= 0.6*clientHeight) {
    topBtn.style.display = "block";
   } else {
    topBtn.style.display = "none";
   };
};

function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/10));
    }
}