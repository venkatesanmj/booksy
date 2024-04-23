let popupoverlay=document.querySelector(".popup-overlay")
let popupbox=document.querySelector(".popup")
let addbtns=document.getElementById("btn-add")
let cancelbtn=document.getElementById("cancel-popup")


addbtns.addEventListener("click",function(){
    popupoverlay.style.display ="block";
    popupbox.style.display="block";
})

cancelbtn.addEventListener("click",function(event){
   event.preventDefault() //its for form load block
   popupoverlay.style.display ="none";
   popupbox.style.display="none";
    
})


// selecting container, title-input,author-input,description-input,add-book

let container=document.querySelector(".container")
let titleinput=document.getElementById("title-input")
let authorinput=document.getElementById("author-input")
let descriptioninput=document.getElementById("description-input")
let addbook=document.getElementById("add-book")


addbook.addEventListener("click",function(event){
 event.preventDefault()
 popupoverlay.style.display ="none";
 popupbox.style.display="none";
 let div=document.createElement("div")
 div.setAttribute("class","container-child")
div.innerHTML=`<h2>${titleinput.value}</h2>
               <h4>${authorinput.value}</h4>
               <p>${descriptioninput.value}</p>
                <button onclick='deletebook(event)'>delete</button>`

 container.append (div)
})
function deletebook(event)
{
    event.target.parentElement.remove()
}
