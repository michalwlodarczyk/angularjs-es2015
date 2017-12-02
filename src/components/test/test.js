import { TestModule } from './test.module';
import './test2';

class TestComponent {
  constructor() {
    console.log('constructor test 1');
  }

  $onInit() {
    this.title = 'test 1';
  }
}


export default TestModule
  .component('test', {
    // templateUrl,
    controller: TestComponent,
    template: `<div class="test"><test2></test2>{{ $ctrl.title }} {{  + 1 }}</div>`,
  })
  .name;
