

var metric = function(lat1, lon1, lat2, lon2) 
{
    var R = 6371000; // metres

    var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = 
	0.5 - Math.cos(dLat)/2 + 
	Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
	(1 - Math.cos(dLon))/2;
    
    return R * 2 * Math.asin(Math.sqrt(a));
}


if (Meteor.isClient) {
    Template.lldistance.helpers({
	distance: function() {
	    var data = Template.currentData();
	    if (!data.lat || !data.lng) {
		console.log("LLdistance template error, call with here=Geolocation.latlng() lat=destination_lat lng=destination_lon");
		return "?? km";
	    }
	    var here = data.here;
	    if (!here) {
		here = Geolocation.latLng();
		if (!here)
		    return "(calculating..)";
	    }

	    // do the calculation
	    var meters = metric(here.lat, here.lng, data.lat, data.lng);
	    
	    // make a user friendly number
	    if (lldistance.metric) {
		var km = meters/1000;
		if (km > 10) return Math.round(km) + " km";
		if (meters > 999) return Math.round(km*10)/10 + " km";
		return Math.round(meters/10)*10 + " m";
	    } else {
		var miles = meters / 1609.34;
		var feet = meters / 0.3048;
		if (miles > 10) return Math.round(miles) + " miles";
		if (feet > 999) return Math.round(miles*10)/10 + " miles";
		return Math.round(feet/10)*10 + " feet";
	    }
 	}
    });
}
