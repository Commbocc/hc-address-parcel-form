import * as esriLoader from 'esri-loader'

export default class Geocoder {
  constructor () {}

  // esri settings
  static get esri () {
    return {
      // url: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer',
      // url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer',
      url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_WebApps/GeocodeServer',
      wkid: 102659
    }
  }

  // returns promise
  static findAddressLocation (inputAddress) {
    return esriLoader.loadModules([
      'esri/tasks/Locator'
    ]).then(([Locator]) => {
      var locator = new Locator({
        url: Geocoder.esri.url,
        outSpatialReference: {wkid: Geocoder.esri.wkid}
      })

      return locator.addressToLocations({
        address: {SingleLine: inputAddress},
        maxLocations: 1
      }).then(response => {
        if (response.length) {
          return response[0].location
        } else {
          throw new Error('That address was not found in our records.')
        }
      })
    })
  }
}
