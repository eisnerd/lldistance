Distance Calculations Template for Meteor
===

Distance Calculation between two longitude-latitude points (with the default of the first point being current location) for meteor applications

Performs a straigth line calculation between two points -- very fast, no dependencies on external webservices.


### Usage

The long form is;

    {{> lldistance here=Geolocation.latLng lat=37.31 lng=-121.9 }}

or the shorter form;

    {{> lldistance lat=37.31 lng=-121.9 }}


### Output

And you will get output like;

    340 feet
    6.3 miles
    22 miles

or if you prefer metric

    220 m
    2.7 km
    15 km


You can style the text by modifying the css class `.lldistance`

### Configuration

	lldistance.metric = true;  // to get km and meters
	lldistance.metric = false; // to get miles and feet (default)

	lldistance.miles = [" miles"," feet"]; // labes used for imperial
	lldistance.miles = [" km"," m"];       // labes used for metric


### Known issues

   - You cannot configure the size of the planet