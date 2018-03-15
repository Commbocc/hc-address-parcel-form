import Geocoder from './Geocoder'
import Parcel from './Parcel'

export default class FormResult {
  constructor (inputAddress) {
    this.inputAddress = inputAddress
    this.locationData = null
    this.parcelData = null
  }

  findAddressLocation () {
    return Geocoder.findAddressLocation(this.inputAddress).then(locationData => {
      this.locationData = locationData
      return locationData
    })
  }

  findParcel (returnGeometry = false) {
    return Parcel.findParcel(this.locationData, returnGeometry).then(parcelData => {
      this.parcelData = parcelData
      return parcelData
    })
  }
}
