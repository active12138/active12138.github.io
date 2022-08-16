//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
    "url(/img/banner.jpg)",
    "url(/img/banner1.jpg)",
    "url(/img/banner2.jpg)",
    "url(/img/banner3.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("page-header").style.backgroundImage = backimg[bgindex];
document.getElementById("footer").style.backgroundImage = backimg[bgindex];