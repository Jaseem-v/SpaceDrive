// toggle menu--------


function toggleMenu() {
  document.querySelector(' .header2 .nav-right ul').classList.toggle('active')
    document.body.style.overflow = "hidden";
}

function closeMenu(){
  document.querySelector(' .header2 .nav-right ul').classList.toggle('active')
  document.body.style.overflow = "auto";
}





//move-up--

$(".move-up span").click(function(){
  $('html,body').animate({
      scrollTop:0
  },1000);
});





