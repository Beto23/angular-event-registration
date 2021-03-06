eventsApp.factory('eventData', eventData)

function eventData (){
  return{
    event: {
      name: 'Angular Boot Camp',
      date: '25/03/2016',
      time: '11:23 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imgUrl: '/img/angularjs-logo.png',
      sessions:[
        {
          name: 'Directives MasterClass Introductory',
          creatorName: 'Bob Smith',
          duration: 1,
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives!',
          upVoteCount: 0
        },
        {
          name: 'Scope for fun and profit',
          creatorName: 'Jhon Doe',
          duration: 2,
          level: 'Introductory',
          abstract: 'This session will take a closer look at Scope. Learn what they do, how they do it, and how to get them to do it for you',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jhon Doe',
          duration: 4,
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular does Learn how to craf controllers that will win the repect of your friends and neighbors',
          upVoteCount: 0
        }
      ]
    }
  }
}
