<template lang="html">
  <form @submit.prevent="submitForm">

    <div class="form-group">
      <div class="input-group input-group-lg">

        <!-- address input -->
        <input list="suggestions" class="form-control" v-model="inputAddress" :placeholder="placeholder" autocomplete="off" required @keyup="suggestLocations">

        <!-- suggestions -->
        <datalist id="suggestions">
          <option v-for="(s, index) in suggestions" :value="s.text" :key="index"/>
        </datalist>

        <!-- button -->
        <span class="input-group-append">
          <button class="btn text-white" :class="btnClass" type="submit">
            <i :class="btnIcon"></i>
            <span class="d-none d-sm-inline-block">
              {{ btnText }}
            </span>
          </button>
        </span>

      </div>
    </div>

  </form>
</template>

<script>
import FormResult from '../models/FormResult'
import Geocoder from '../models/Geocoder'

export default {
  name: 'address-form',
  data () {
    return {
      inputAddress: '',
      isSearching: false,
      suggestions: []
    }
  },
  methods: {
    submitForm (e) {
      // this.isSearching = true
      this.suggestions = []
      this.$emit('submit', new FormResult(this.inputAddress, this.returnParcelGeometry))
      // this.isSearching = false
    },
    suggestLocations (e) {
      if (this.inputAddress.length >= 3) {
        Geocoder.suggestLocations(this.inputAddress).then(suggestions => {
          this.suggestions = suggestions
        })
      }
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Your Street Address...'
    },
    returnParcelGeometry: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnText () {
      // return (this.isSearching) ? 'Loading' : 'Find'
      return 'Find'
    },
    btnClass () {
      return (this.isSearching) ? 'btn-warning' : 'btn-secondary'
    },
    btnIcon () {
      return (this.isSearching) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
    }
  }
}
</script>
