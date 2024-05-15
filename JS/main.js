let inputText = document.getElementById("inputText")
let change = document.getElementById("change")

change.addEventListener("click" , function () {
   if ( change.getAttribute("data-text") == "show" ) {
      inputText.setAttribute("type","text")
      change.setAttribute("data-text","hide")
      change.innerHTML = "Hide"
   }else {
      inputText.setAttribute("type","password")
      change.setAttribute("data-text","show")
      change.innerHTML = "Show"
   }
})
