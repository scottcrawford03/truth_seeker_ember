import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-canvas'],
  markers: [],

  insertMap: function() {
    var container = this.$()[0];

    var options = {
      center: new window.google.maps.LatLng(
          this.get("latitude"),
          this.get("longitude")),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: this.styles,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.MEDIUM,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
    };

    this.set('map', new window.google.maps.Map(container, options));
    this.renderTruths();

  }.on('didInsertElement'),

  renderTruths: function () {
    this.get('markers').forEach(function(marker) { marker.setMap(null); });
    this.get('truths').forEach((truth) => {
      this.placeTruthMarker(truth);
    });
  },

  updateTruths: function () {
    let markers = this.get('markers');
    let truths = this.get('truths');
    this.renderTruths();
  }.observes('truths'),

  placeTruthMarker: function (truth) {
    let icon = {
      url: `/assets/images/${this.get('category').toLowerCase()}.png`,
      scaledSize: new google.maps.Size(25,30),
      origin: null,
      anchor: null,
    };

    let marker = new google.maps.Marker({
      position: new window.google.maps.LatLng(
          truth.get('lat'),
          truth.get('long')),
      map: this.get('map'),
      title: truth.get('text'),
      icon: icon
    });
    this.markers.pushObject(marker);
  },

  styles: [
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#191919"
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
});
