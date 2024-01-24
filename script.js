let input=document.getElementById("inp");

let button=document.getElementById("btns")
let list=document.getElementById("list")

button.addEventListener("click",()=>{
    let li=document.createElement("li")
    li.classList.add("list-group-item");
    li.textContent=input.value;
    li.classList.add('li-style')

    let remove=document.createElement("button");
    remove.classList.add("remove-btn")
    remove.textContent="remove";
    li.appendChild(remove)
    list.appendChild(li)

    remove.addEventListener("click",()=>{
        list.removeChild(li)
    })
    input.value=""
})