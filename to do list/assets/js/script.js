textbox=document.getElementById('textbox')
button=document.getElementById('button')
todolist=document.getElementById('todolist')
clear=document.getElementById('clear')

todos=[];
textbox.focus()

window.onload = ()=>{
    todos= JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo =>  addTodo(todo))
}
button.addEventListener('click',()=>{
    todos.push(textbox.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    addTodo(textbox.value)
    textbox.value = ''
    textbox.focus();
})

clear.addEventListener('click',()=>{
    localStorage.clear();
    todolist.innerHTML = ""
    todos=[]
})

function addTodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todolist.appendChild(para);
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })

    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo);
    if(index> -1)
         todos.splice(index,1)
    
    localStorage.setItem('todos', JSON.stringify(todos))
}



