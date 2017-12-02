import angular from "angular";

import "./components/test/test";
import "./components/todo/todo";

const app = angular
  .module('app', [
    'test',
    'todo'
  ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
});

// export default app;
