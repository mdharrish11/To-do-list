var input = document.getElementById("input")
var button = document.getElementById("button")
var arr = []
var todoli = document.getElementById("todolist")

button.onclick = function(){

arr.push(input.value)
input.value = ""
display()

}

function display(){

    todoli.innerHTML= ""
arr.forEach(function(ele,i){
todoli.innerHTML += "<li>" +"<a onclick = funedit("+i+")> edit </a>" +ele + "<a>|</a>"+"<a onclick = fundelete("+i+")> x </a>" + "</li>"
})
}

function funedit(i){

    var newele = prompt("Edit value")


    arr.splice(i,1,newele)
   display()
}

function fundelete(i){
    arr.splice(i,1)
display()

}


