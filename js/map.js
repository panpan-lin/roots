$(document).ready(function() {
            var myCenter=new google.maps.LatLng(53.349381, -6.263025);

          var pickUpPoints =  [
            ["Ben Dunne Gym Carlisle", 53.3141678,-6.3031188, 1, 'mapIcon_1.png'],
            ["Church Fitness Dun Laoghaire", 53.2925857,-6.136111, 2, 'mapIcon_1.png'],
            ["Energie fitness Rathfarnham", 53.2899691,-6.2652004, 3, 'mapIcon_1.png'],
            ["Educo Gym", 53.3460511,-6.252725, 4, 'mapIcon_1.png'],
            ["West Wood Club", 53.3238581,-6.2168589, 5, 'mapIcon_1.png'],
            ["Raw Condition Gym", 53.3321112,-6.2643233, 6, 'mapIcon_1.png'],
            ["FLYEfit Gym Ranelagh", 53.3386826,-6.2600935, 7, 'mapIcon_1.png'],
            ["Phibsboro Gym", 53.3746436,-6.3028371, 8, 'mapIcon_1.png'],
            ["ABS Gym Conditioning Centre", 53.3746436,-6.3028371, 9, 'mapIcon_1.png'],
            ["Ben Dunne Gym Northwood", 53.3746436,-6.3028371, 10, 'mapIcon_1.png'],
            ["1escape Health Club", 53.3746436,-6.3028371, 11, 'mapIcon_1.png']
          ];

          function setMarkers(map, pickUpPoints){
            for (var i=0; i<pickUpPoints.length; i++){
              var pickUpPoint = pickUpPoints[i];
              var myLatLng = new google.maps.LatLng(pickUpPoint[1],pickUpPoint[2]);
              var image = {
                url:'img/' + pickUpPoint[4],
                size: new google.maps.Size(40,36),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(18,40)
              }
              var marker = new google.maps.Marker({
                position:myLatLng,
                map:map,
                icon:image,
                title:pickUpPoint[0],
                zIndex:pickUpPoint[3]
              });
            }
          }

          function initialize() {
          	var styles =[
          		{
			        "stylers": [
			            {
			                "hue": "#dd0d0d"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 100
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    }
          	];

          	var styledMap = new google.maps.StyledMapType(styles,
            		{name: "Styled Map"});

            var mapProp = {
                center:myCenter,
                zoom: 12,
                draggable: true,
                scrollwheel: false,
                mapTypeControlOptions:{
                	mapTypeIds:[google.maps.MapTypeId.ROADMAP, 'map_style']
            	}
        	};

            var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            setMarkers(map, pickUpPoints);

          };

          initialize();
});