import * as esriLoader from 'esri-loader'
import Parcel from '../models/parcel'

// const esriGeocoderUrl = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
const esriGeocoderUrl = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer'
const esriWkid = 102100

// vuex module
export default {
  state: {
    input: null,
    searching: false,
    location: null,
    parcel: null
  },
  actions: {
    findAddressAndParcel ({dispatch}, returnGeometry = false) {
      return dispatch('findAddress').then(() => {
        return dispatch('fetchParcel', returnGeometry)
      })
    },
    findAddress ({state, commit}) {
      commit('setLocation', null)
      commit('setParcel', null)
      return esriLoader.loadModules([
        'esri/tasks/Locator'
      ])
      .then(([Locator]) => {
        var hcLocator = new Locator({
          url: esriGeocoderUrl,
          outSpatialReference: {wkid: esriWkid}
        })

        return hcLocator.addressToLocations({
          address: {SingleLine: state.input},
          maxLocations: 1
        })
        .then(response => {
          if (response.length) {
            commit('setLocation', response[0].location)
          } else {
            throw new Error('That address was not found in our records.')
          }
        })
      })
    },
    fetchParcel ({state, commit}, returnGeometry = false) {
      return esriLoader.loadModules([
        'esri/tasks/QueryTask',
        'esri/tasks/support/Query'
      ])
      .then(([QueryTask, Query]) => {
        var queryTask = new QueryTask({
          url: Parcel.esriEndpointUrl()
        })

        var query = new Query()
        query.outFields = Parcel.esriFields()
        query.outSpatialReference = {wkid: Parcel.esriWkid()}
        query.returnGeometry = returnGeometry
        query.geometry = state.location

        return queryTask.execute(query).then(response => {
          if (response.features.length) {
            commit('setParcel', new Parcel(response.features[0]))
          } else {
            throw new Error('A parcel could not be matched to that address.')
          }
        })
      })
    }
  },
  mutations: {
    setInput (state, data) {
      state.input = data
    },
    setLocation (state, data) {
      state.location = data
    },
    setParcel (state, data) {
      state.parcel = data
    },
    setFormIsSearching (state, data) {
      state.searching = data
    }
  }
}
