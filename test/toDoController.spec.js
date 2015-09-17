describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  var tasks

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an empty name field', function() {
    expect(ctrl.taskName).toBeUndefined();
  });

  it('initialises with an empty date field', function() {
    expect(ctrl.taskDate).toBeUndefined();
  });


  it('can add a task name', function(){
  	ctrl.taskName = "first task" ;
    ctrl.addTask();
    expect(ctrl.tasks[0].name).toEqual("first task")
  });

  it('can add a task name', function(){
    ctrl.taskDate = "Thu Sep 10 2015 00:00:00 GMT+0100 (BST)" ;
    ctrl.addTask();
    expect(ctrl.tasks[0].date).toEqual("Thu Sep 10 2015 00:00:00 GMT+0100 (BST)")
  }); 

  it('can delete tasks', function(){
    ctrl.taskName = "first task" ;
    ctrl.taskDate = "Thu Sep 10 2015 00:00:00 GMT+0100 (BST)" ;
    ctrl.addTask();
    ctrl.deleteTask();
    expect(ctrl.tasks).toBeUndefined;
  });
});