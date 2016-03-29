'use strict';
eventsApp.controller('EventController', EventController)

EventController.Inject=['$scope', 'eventData']

function EventController ($scope, eventData){
  console.log('EventController');
  $scope.sortorder = 'name'
  $scope.event = eventData.event;

  $scope.upVoteSession = function(session){
    session.upVoteCount++;
  }
  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  }
}
