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

  // esri Locator
  static initLocator () {
    return esriLoader.loadModules([
      'esri/tasks/Locator'
    ]).then(([Locator]) => {
      return new Locator({
        url: Geocoder.esri.url,
        outSpatialReference: {wkid: Geocoder.esri.wkid}
      })
    })
  }

  // returns promise
  static findAddressLocation (inputAddress) {
    return Geocoder.initLocator().then(locator => {
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

  // returns promise
  static suggestLocations (inputAddress) {
    return Geocoder.initLocator().then(locator => {
      return locator.suggestLocations({
        text: inputAddress
      }).then(response => {
        return response
      }).catch(err => {
        console.error(err)
        return []
      })
    })
  }
}
