'use strict';
eventsApp.controller('EventController', EventController)

EventController.Inject=['$scope']

function EventController ($scope){
  console.log('EventController');
}
