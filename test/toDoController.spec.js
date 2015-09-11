describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an empty to do field', function() {
    expect(ctrl.toDoItem).toBeUndefined();
  });
});