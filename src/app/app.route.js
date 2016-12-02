/**
 * Application route definition.
 */
export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      url      : '/',
      component: 'app'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'app/test/test.html',
      controller: 'TestController',
      controllerAs: 'test'
    });

  $urlRouterProvider.otherwise('/');

}
