'use strict';
eventsApp.filter('durations', durations)

function durations (){
  return function (duration){
    switch (duration) {
      case 1:
        return "Half Hour";
      case 2:
        return "1 Hour";
      case 3:
        return "Half Dat";
      case 4:
        return "Full Day";
    }
  }

}
