import angular from "angular";

class TodoComponent {
  constructor() {
    console.log('constructor todo 1');
  }

  $onInit() {
    this.title = 'todo 1';
  }

  addTodo() {
    console.log('add');
  }
}


export const TodoModule = angular
  .module('todo', [])
  .component('todo', {
    // templateUrl,
    controller: TodoComponent,
    template: `<div class="todo" ng-click="$ctrl.addTodo()">{{ $ctrl.title }} {{ 3 + 5 }}</div>`,
  })
  .name;
