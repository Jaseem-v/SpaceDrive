// toggle menu--------


function toggleMenu() {
  document.querySelector(' .header2 .nav-right ul').classList.toggle('active')
  var closeMenu = document.querySelector('.header2 .nav-right ul.active');

  if (closeMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function closeMenu(){
  document.querySelector(' .header2 .nav-right ul').classList.toggle('active')
}





//move-up--

$(".move-up span").click(function(){
  $('html,body').animate({
      scrollTop:0
  },1000);
});





