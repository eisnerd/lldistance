

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

between = function(there, here) {
    if (!here) {
        here = Geolocation.latLng();
    }
    if (there && there.length > 1)
        there = { lat: there[1], lng: there[0] };
    if (here && there && typeof there.lat !== "undefined" && typeof there.lng !== "undefined")
        return metric(here.lat, here.lng, there.lat, there.lng);
};

formatDistance = function(meters, options) {
    if ((options || lldistance).metric) {
        var km = meters/1000;
        if (km > 10) return Math.round(km) + lldistance.km[0];
        if (meters > 999) return Math.round(km*10)/10 + lldistance.km[0];
        return Math.round(meters/10)*10 + lldistance.km[1];
    } else {
        var miles = meters / 1609.34;
        var feet = meters / 0.3048;
        if (miles > 10) return Math.round(miles) + lldistance.miles[0];
        if (feet > 999) return Math.round(miles*10)/10 + lldistance.miles[0];
        return Math.round(feet/10)*10 + lldistance.miles[1];
    }
}

if (Meteor.isClient) {
    Template.lldistance.helpers({
	distance: function() {
	    var data = Template.currentData();

	    // do the calculation
	    var meters = between(data, data.here);

            if (typeof meters === "undefined")
                return data.fallback ? data.fallback() : data.default;
	    
	    // make a user friendly number
	    return formatDistance(meters, lldistance);
 	}
    });
}
