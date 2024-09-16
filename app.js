var table = document.querySelector("#table")
var div = document.querySelector("div")

function generateTable(){
    div.innerHTML = ""
    var num = table.value
    for(var i = 1; i <=10; i++ ){
        console.log(num*i)
        
        
        div.innerHTML += `<p>${num} * ${i} = ${num * i}</p>`
    }
}
