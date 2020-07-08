window.onload = function(){
  window.addEventListener('scroll', function(e){
    const cart = document.getElementById("cart")
    const scrollY = window.scrollY;
    if(scrollY > 400){
      cart.style="position:fixed"; 
    }else{
      cart.style="position:static"
    }
  })
}