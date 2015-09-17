toDo.controller('ToDoController', [function() {
	var self = this; 

	self.tasks = [];

	self.addTask = function() {
    self.tasks.push(
      { 
        "name" : self.taskName,
        "date" : self.taskDate,
        "completed": false
      });
    self.taskName = ''
    self.taskDate = ''
  };

  self.deleteTask = function(task){
    self.tasks.splice(task,1);
  };

  self.editTask = function(){

  };

}]);
