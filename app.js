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
todoli.innerHTML += "<li>" + ele + "<a onclick = funedit("+i+")> edit </a>"  + "</li>"
})
}

function funedit(i){

    var newele = prompt("Edit value")


    arr.splice(i,1,newele)
   display()
}


