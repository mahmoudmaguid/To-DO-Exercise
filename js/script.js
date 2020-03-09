var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');
var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");
var createNewTask = function(task){
  var listItem = document.createElement("li"); 
  var checkBox = document.createElement("input"); 
  var label = document.createElement("label"); 
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;  
};
var addTask = function(){
  var listItem = createNewTask(newTask.value);
  toDoUl.appendChild(listItem); 
  newTask.value="";
  bindIncompleteItems(listItem, completeTask);

};

var completeTask = function(){
  
  listItem = this.parentNode;

   checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  completeUl.appendChild(listItem); 
  bindCompleteItems(listItem);
};
var bindIncompleteItems = function(taskItem, checkBoxClick){  
  
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  
  checkBox.oninput = checkBoxClick;  
}; 
for(var i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}
addTaskBtn.addEventListener("click", addTask);

