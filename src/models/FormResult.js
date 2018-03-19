import Geocoder from './Geocoder'
import Parcel from './Parcel'

export default class FormResult {
  // returns promise
  constructor (inputAddress, returnGeometry = false) {
    this.inputAddress = inputAddress
    this.locationData = null
    this.parcelData = null
    return this.getResult(returnGeometry)
  }

  getResult (returnGeometry = false) {
    return Geocoder.findAddressLocation(this.inputAddress).then(locationData => {
      this.locationData = locationData
      return Parcel.findParcel(this.locationData, returnGeometry).then(parcelData => {
        this.parcelData = parcelData
        return this
      })
    })
  }
}
