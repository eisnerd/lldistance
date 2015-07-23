Distance Calculation between two longitude-latitude points (with the default of the first point being current location) for meteor applications

Uses straigth line calculation between two points.

The long form is;

  {{> lldistance here=Geolocation.latLng lat=37.31 lng=-121.9 }}

or the shorter form;

  {{> lldistance lat=37.31 lng=-121.9 }}


You can style the output by modifying the css class '.lldistance'

Configuration

	lldistance.metric = true;  // to get km and meters
	lldistance.metric = false; // to get miles and feet (default)
