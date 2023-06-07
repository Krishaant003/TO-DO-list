import{v4 as uuidV4} from "uuid"



const input = document.getElementById("input")as HTMLInputElement
const button = document.getElementById("submit") 
const list = document.getElementById("item") as HTMLInputElement
const  end = document.getElementById("done")
var i = 1;

button?.addEventListener("click", e=>{
    var tsk = input.innerHTML
    list.innerHTML += i +"."+tsk + '<br/>'
    i ++
    input.innerHTML=""
})
end?.addEventListener("click",e=>{
    list.innerHTML=" "
})