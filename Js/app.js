window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('down', window.scrollY > 0);

  var logo = document.querySelector(".brand img");
if (window.scrollY>0) {
  logo.setAttribute('src', 'Img/logoExperia.jpg');
}else{
  logo.setAttribute('src', 'Img/logoExperia.jpg');
}

});

//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});
