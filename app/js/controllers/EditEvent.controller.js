'use strict'
eventsApp.controller('EditEventController', EditEventController)

EditEventController.inject = ['$scope']

function EditEventController ($scope){
  $scope.saveEvent = function (event) {
    window.alert('event ' + event.name + ' saved');
  }

  $scope.cancelEdit = function (){
    window.location = "/EventDetails.html"
  }
}
