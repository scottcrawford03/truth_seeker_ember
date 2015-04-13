/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'truth-seeker-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
    'img-src': "'self' https://*.googleapis.com https://*.gstatic.com",
    'font-src': "'self' https://*.gstatic.com",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.mapStyles = [
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "hue": "#191919"
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

  return ENV;
};
