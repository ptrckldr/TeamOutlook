$(function(){
	$.extend({
		checkNetwork: function() {
			if (Titanium.Network.online === false) {
				alert('You must have an network connection to use this application! Please check your connection and try again.');
				return false;
      } 
		},
		exitApp: function() {
			Titanium.App.exit();
		},
		beginLoading: function(message) {
			$('#loading .message').html(message);
			$('#loading').animate({
				opacity: '1'
			},500 );
		},
		finishLoading: function(message){
			$('#loading .message').html(message);
			setTimeout(function(){
				$('#loading').animate({
					opacity: '0'
				},500 );
			}, 1000);
		},
		timeline: function(month, year){
			return new Date(year, month, 0).getDate();
		},
		growl: function(message) {
			var notification = Titanium.Notification.createNotification(Titanium.UI.getMainWindow());
			notification.setTitle("TeamOutlook");
			notification.setMessage(message);
			Titanium.Media.beep();
			notification.show();
		}
		
	});
	
	var connected = false;
	var connectInterval;
	
	$.checkNetwork();
	
	function init() {
		// Connect to Database
		setTimeout(function(){
			$.beginLoading("Connecting to Database...");
		}, 800);
		
		connectInterval = setTimeout(tryConnect, 1000);
	}
	
	function tryConnect() {
		if(!database.connect() && !connected) {
			database.connect();
		} else {
			connected = true;
			setTimeout(function() {
				$.finishLoading("Database Connected!");
			}, 800);
			clearInterval(connectInterval);
		}
	}
	
	init();
	
});