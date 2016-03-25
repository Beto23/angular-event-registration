'use strict';
eventsApp.controller('EventController', EventController)

EventController.Inject=['$scope']

function EventController ($scope){
  console.log('EventController');
  $scope.event = {
    name: 'Angular Boot Camp',
    date: '24/03/2016',
    time: '11:23 am'
  }
}
