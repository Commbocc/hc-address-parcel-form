import * as esriLoader from 'esri-loader'

export default class Parcel {
  constructor (feature) {
    this.folio = feature.attributes.FOLIO
    this.address = feature.attributes.SITE_ADDR
    this.geometry = feature.geometry
  }

  // esri settings
  static get esri () {
    return {
      url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0',
      fields: ['FOLIO', 'SITE_ADDR'],
      wkid: 102659
    }
  }

  // returns promise
  static findParcel (locationData, returnGeometry = false) {
    return esriLoader.loadModules([
      'esri/tasks/QueryTask',
      'esri/tasks/support/Query'
    ]).then(([QueryTask, Query]) => {
      var queryTask = new QueryTask({
        url: Parcel.esri.url
      })

      var query = new Query()
      query.outFields = Parcel.esri.fields
      query.outSpatialReference = {wkid: Parcel.esri.wkid}
      query.returnGeometry = returnGeometry
      query.geometry = locationData

      return queryTask.execute(query).then(response => {
        if (response.features.length) {
          return new Parcel(response.features[0])
        } else {
          throw new Error('A parcel could not be matched to that address.')
        }
      })
    })
  }
}
