var gForm = document.getElementById("gform");
gForm.addEventListener('submit', (e) => {
  
  // Timeout is needed for form to properly submit with animation
  setTimeout(function(){
   
  var subscribeForm = document.getElementById("subscribeForm")
 subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s;  animation-fill-mode: forwards;");
 gForm.setAttribute("style", "display:none;");  
 
subscribeForm.innerHTML = `<h1>Your Email Has Added To Our Newsletter List!</h1> `   
  
subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s;  animation-fill-mode: forwards;");  

},500);
  
  
})
