var todoList = document.getElementById('todoList')

// Add Todo
function AddTodo(){
    var getInput = document.getElementById('todoInput');
    if(getInput.value!=""){
    var li = document.createElement('li');
    var textNode = document.createTextNode(getInput.value)
    li.appendChild(textNode)
    var closeBtn = document.createElement('button')
    var closeI = document.createElement('i')
    closeBtn.setAttribute('onclick', 'DeleteTodo(this)')
    closeBtn.classList.add('close-btn')
    closeI.classList.add("fa-solid")
    closeI.classList.add("fa-trash")
    var editeBtn = document.createElement('button')
    editeBtn.setAttribute('onclick', 'EditeTodo(this)')
    var editeI = document.createElement('i')
    editeBtn.classList.add('edite-btn')
    editeI.classList.add("fa-solid")
    editeI.classList.add("fa-pen-to-square")
    closeBtn.appendChild(closeI)
    editeBtn.appendChild(editeI)
    li.appendChild(closeBtn)
    li.appendChild(editeBtn)
    todoList.appendChild(li)
    getInput.value=""
    }else{
        alert("Todo is required")
    }
}

// Delete Todo
function DeleteTodo(el){
el.parentNode.remove()
}

// Edite Todo
function EditeTodo(el){
    var parent = el.parentNode;
    var updateData = prompt('Edite', parent.firstChild.data)
    parent.firstChild.data =  updateData == null || updateData == "" ?  parent.firstChild.data : updateData
}

// Delete All Todo
function AllDelete(){
var todoList = document.getElementById('todoList')
while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
}
}