toDo.controller('ToDoController', [function() {
	var self = this; 

	self.tasks = [];

	self.addTask = function() {
    self.tasks.push(
      { 
        "name" : self.taskName,
        "completed": false
      });
    self.taskName = ''
  };

}]);
