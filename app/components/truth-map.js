import Ember from 'ember';

export default Ember.Component.extend({
    insertMap: function() {
    var container = this.$(".map-canvas")[0];

    var styles = [
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#001204"
          },
          {
            "saturation": 100
          },
          {
            "lightness": -95
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#007F1E"
          },
          {
            "saturation": 100
          },
          {
            "lightness": -72
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#00C72E"
          },
          {
            "saturation": 100
          },
          {
            "lightness": -59
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#002C0A"
          },
          {
            "saturation": 100
          },
          {
            "lightness": -87
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#00A927"
          },
          {
            "saturation": 100
          },
          {
            "lightness": -58
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]

    var options = {
      center: new window.google.maps.LatLng(
          this.get("latitude"),
          this.get("longitude")),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: styles
    };

    var map = new window.google.maps.Map(container, options);
  }.on('didInsertElement')
});
