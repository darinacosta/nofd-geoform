define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "239beb3874bd4251a38f817ed093678f",
    "form_layer": {
        "id": "nofd_geoform_v4_398"
    },
    "details": {
        "Title": "NOFD Smoke Alarm Survey",
        "Logo": "http://gis.nola.gov/files/smoke-detector.png",
        "Description": ""
    },
    "fields": {
      "nofd_geoform_v4_398": [
        {"name":"MEMBER","alias":"Your name:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name":"COMPANY","alias":"Your company:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name":"Address", "alias":"Location address:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name":"LOT_VACANT","alias":"Is the lot vacant?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"BLIGHTED_DANGEROUS","alias":"Is it blighted or dangerous?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"HOME_VACANT","alias":"Is the home vacant?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"COMMERCIAL","alias":"Is the property commercial?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"RESIDENTIAL_UNIT_NUMBER","alias":"Housing unit number?","isEditable":true,"tooltip":"","visible":true,"format":null},
        {"name":"ANYONE_HOME","alias":"Is anyone home?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"SMOKE_ALARM","alias":"Are there smoke alarms?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"ALARM_WORKS","alias":"Do the smoke alarms work?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"CAN_WE_INSTALL","alias":"Can you install smoke alarms?","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"radio"},
        {"name":"OCC_NAME", "alias":"Occupant name:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name":"OCC_PHONE", "alias":"Occupant phone number:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name":"OCC_NUM", "alias":"Number of occupants:","isEditable":true,"tooltip":"","visible":true,"format":null,"displayType":"text"},
        {"name": "NUM_ALARMS", "alias": "How many smoke alarms did you install?","isEditable":true,"tooltip":"","visible":true,"format":null},
        {"name":"NUM_BATTERIES","alias":"How many batteries did you install?","isEditable":true,"tooltip":"","visible":true,"format":null}
      ]
    },
    "theme": "bootstrap", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    "useSmallHeader": true,
    "enableSharing": false,
    "defaultMapExtent": true,
    "pushpinColor": "blue",
    "nextBasemap": "hybrid",
    "defaultBasemap": "topo",
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentLabel": "",
    "attachmentHelpText": "",
    "showLayer": true,
    "disableLogo": false,
    "locate":false,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": true,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "attachmentInfo":{
    },
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": "http://gis.nola.gov:6080/arcgis/rest/services/Staging/CompositePIN3/GeocodeServer"
        }]
    },
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e"
});