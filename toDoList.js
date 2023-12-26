const toDoName = document.querySelector('.to-do-name');
const toDoDate = document.querySelector('.to-do-date');
const addButton = document.querySelector('.add-button');

const listDiv = document.querySelector('.list-div');
const deleteButton = document.querySelector('.delete-button');

let todoObject = {
  Name:'',
  Date:''
};
let listNumber = 0;
let todoList = [];
addButton.addEventListener('click',() => {
  todoObject.Name = toDoName.value;
  todoObject.Date = toDoDate.value;
  const html = 
`<div class="added-list-div" id="${listNumber}">
  <div class="added-name">${todoObject.Name}</div>
  <div class="added-date">${todoObject.Date}</div>
  <button class="delete-button">Delete</button>
  <button class="checked-button">checked</button>
</div>`;
  todoList.push(html);
  listDiv.innerHTML = arrays(todoList);
  
  console.log(listNumber)
  console.log(todoList)
  listNumber++;

  let close = document.getElementsByClassName("delete-button");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      let divId = this.id;
      div.remove();
      todoList.splice(divId,1);
    }
  }

  let checked = document.getElementsByClassName("checked-button");
  for (i = 0; i < checked.length; i++) {
    checked[i].onclick = function() {
      let div = this.parentElement;
      div.style.transition = "1s";
      div.style.backgroundColor = "lightgreen";
    }
  }
})

function arrays (array) {
  all = '';
  for(i = 0; i < array.length; i++){
    all += array[i];
  }
  return all;
}