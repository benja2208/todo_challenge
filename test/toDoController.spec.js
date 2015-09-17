describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  var tasks

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  beforeEach(inject(function(ToDoItems){
    tasks = toDoItems;
  }));

  it('initialises with an empty to do field', function() {
    expect(ctrl.newItem).toBeUndefined();
  });

  it('can add a task', function(){
  	ctrl.newItem = "first task"
    ctrl.addTask();
    expect(ctrl.tasks).toEqual([
      {
        'name': 'Adding task number 1',
        'Completed': false
      }
    ]);
  });
});