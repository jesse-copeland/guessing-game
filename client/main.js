if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("teamCount", 8);

  Template.landing.helpers({
    teamCount: function () {
      return Session.get("teamCount");
    }
  });
  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get("counter");
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set("counter", Session.get("counter") + 1);
  //   }
  // });

  // Session.setDefault('showTeamInput', false)
  // Template.teamInput.isTrue = function() { Session.get('showTeamInput'); }
  // Template.landing.events({
  //     'click a.team': function(){
  //         //load a new template
  //         console.log("You pressed the showTeamInput button");//this fn is called properly
  //            Session.set('showAddNewPlace', true)
  //     }
  // });

  $(function () {
    var $body = $("body");

    $body
      .on("focus", "input[type=text], input[type=password], input[type=email], textarea", function () {
      $(this).siblings("label").addClass("active");
      console.log("focus add active");
    })
    
    .on("blur", "input[type=text], input[type=password], input[type=email], textarea", function () {
      if ($(this).val().length === 0) {
        $(this).siblings("label").removeClass("active");  
      };
    });  
  });
  
}
