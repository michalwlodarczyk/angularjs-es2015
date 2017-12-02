import { TestModule } from "./test.module";

class Test2Component {
  constructor() {
    console.log('constructor test 2');
  }

  $onInit() {
    this.title = 'test 2';
  }
}


export default TestModule
  .component('test2', {
    // templateUrl,
    controller: Test2Component,
    template: `<div class="test">test 2 {{ 2 + 3}}</div>`,
  })
  .name;
