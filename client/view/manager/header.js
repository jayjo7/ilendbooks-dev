Template.header.events({

	'click .logout': function (event) {
		console.log("logout clicked...")
		Meteor.logout();
		Router.go('home');
	}
})