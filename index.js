const todoList=[];
renderTodoList();
function renderTodoList(){
    
    let todoListHTML='';

for(let i=0; i<todoList.length; i++){
    const todoListObject=todoList[i];
    const {name, duedate}=todoListObject;

    const html=`<div>${name}</div><div> ${duedate}</div><button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-button">Delete</button>`;
    todoListHTML+=html;
    
}
const container= document.querySelector(".js-todo-container");
container.innerHTML=todoListHTML;
} 
function addToDo(){
    const inputElementName =document.querySelector(".js-name-input");
    const inputElementDate=document.querySelector('.js-date-input');

    const name= inputElementName.value;
    const duedate=inputElementDate.value;
     
  
   
    todoList.push({name, duedate});
   
    inputElementName.value='';
    renderTodoList();
}   