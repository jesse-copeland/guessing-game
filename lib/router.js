Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'landing'});
Router.route('/team', {name: 'teamInput'});
Router.route('/gameboard', {name: 'gameBoard'});