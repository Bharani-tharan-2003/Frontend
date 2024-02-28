//select popup box, popup overlay, button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 //select para, para-graph, book-title-input, book-author-input, Description-input
 var para = document.querySelector(".para")
 var addbook = document.getElementById("add-book")
 var booktitleinput = document.getElementById("book-title-input")
 var bookauthorinput = document.getElementById("book-author-input")
 var descriptioninput = document.getElementById("Description-input")


 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","para-graph")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletecontent(event)">Delete</button>`
    para.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    

 })

 function deletecontent(event){
    event.target.parentElement.remove()

 }



