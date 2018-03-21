import Geocoder from './Geocoder'
import Parcel from './Parcel'

export default class FormResult {
  constructor (inputAddress, returnGeometry = false) {
    this.inputAddress = inputAddress

    this.locationData = null
    this.parcelData = null
    this.errors = []

    // returns promise
    return this.getResult(returnGeometry)
  }

  getResult (returnGeometry = false) {
    return Geocoder.findAddressLocation(this.inputAddress).then(locationData => {
      this.locationData = locationData
      return Parcel.findParcel(this.locationData, returnGeometry).then(parcelData => {
        this.parcelData = parcelData
        return this
      })
    }).catch(err => {
      this.errors.push(err)
    }).then(() => {
      return this
    })
  }
}
