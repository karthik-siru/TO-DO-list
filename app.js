// Selectors

const todoInput  = document.querySelector(".todo-Input");
const todoButton = document.querySelector(".todo-Button");
const todoList   = document.querySelector(".todo-List");

// Event Listeners 

todoButton.addEventListener("click", append_todo);
todoList.addEventListener("click", delete_check);

// Functions 

function append_todo(event){

    //prevent the form from submitting 
    event.preventDefault();

    // create a div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    
    // create li 
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value ;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);
    // check button
    const completed_button = document.createElement("button");
    completed_button.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completed_button.classList.add("completed-btn");
    tododiv.appendChild(completed_button);
    // delete button
    const trash_button = document.createElement("button");
    trash_button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trash_button.classList.add("trash-btn");
    tododiv.appendChild(trash_button);


    // append thus new todo to the todo list 

    todoList.appendChild(tododiv);

    //clear the input 
    todoInput.value  = "";

}


function delete_check(e){
    const item =  e.target ;
    // delete 
    if (item.classList[0] === 'trash-btn'){
        const todo =  item.parentElement;
        todo.remove();
    }
    // completed
    if (item.classList[0] === 'completed-btn'){
        const todo =  item.parentElement;
        todo.classList.toggle("completed");
    }

}