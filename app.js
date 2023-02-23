// selectors

const todoInput =document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.getElementById("todo-list");

// const inputValue = todoInput.value;

//Event listener

//call local
document.addEventListener('DOMContentLoaded',getTodos);

todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click' ,deleteCheck);

todoList.addEventListener('click' ,completeCheck);



// Function

function addTodo(event){

    console.log("button clicked")

    //Prevent from submitting refresh
    event.preventDefault();


    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li and pass value
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // appending li into div
    todoDiv.appendChild(newTodo);

    // save into local

    saveLocal(todoInput.value);


    //completed button and append with todo
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check fa-xl"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);

    //completed button and append with todo
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash fa-xl"></i>';
    deleteButton.classList.add("delete-btn");
 
    todoDiv.appendChild(deleteButton);


    // Append todoDiv into todoList

    todoList.appendChild(todoDiv);

    // To clean input tab
    todoInput.value="";


}

// Delete function

function deleteCheck(event){
    //console.log(event.target.parentNode);
    //console.log(event.target.parentNode.parentNode);
    if(event.target.classList == "delete-btn"){
        event.target.parentNode.remove();
        removeLocal(event.target.parentNode.children[0]); // accessing li
    }
    
}

// complete fun

function completeCheck(event){
    //console.log(event.target)

    if(event.target.classList == "complete-btn"){
        event.target.parentNode.classList.toggle("complete");

    }
}

// Save local

function saveLocal(todo){
    // check -- > there is any
    let todos;
    if(localStorage.getItem('todos') == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

// storage getting

function getTodos(){
    let todos;
    // check -- > there is any
    if(localStorage.getItem('todos') == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        //Todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // create li and pass value
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;

        // appending li into div
        todoDiv.appendChild(newTodo);


        //completed button and append with todo
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check fa-xl"></i>';
        completedButton.classList.add("complete-btn");

        todoDiv.appendChild(completedButton);

        //completed button and append with todo
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash fa-xl"></i>';
        deleteButton.classList.add("delete-btn");
    
        todoDiv.appendChild(deleteButton);


        // Append todoDiv into todoList

        todoList.appendChild(todoDiv);
    })

}


// remove from local

function removeLocal(todo){
    if(localStorage.getItem('todos') == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // console.log(todo.innerText);
    const todoIndex = todos.indexOf(todo.innerText); // accessing text from li deleted
    
    todos.splice(todoIndex,1);
    localStorage.setItem('todos',JSON.stringify(todos))
    
}

/************************/

