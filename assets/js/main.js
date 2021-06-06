
// toggle menu--------


function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector(' .header2 .nav-right ul').classList.toggle('active')
  var closeMenu = document.querySelector('.menu.active');

  if (closeMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  document.querySelector('.header2').classList.toggle('open')
}




//move-up--

$(".move-up span").click(function(){
  $('html,body').animate({
      scrollTop:0
  },1000);
});





