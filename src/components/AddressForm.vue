<template lang="html">
  <form @submit.prevent="submitForm">

    <div class="form-group">
      <div class="input-group input-group-lg">

        <!-- address input -->
        <input list="suggestions" class="form-control data-hj-whitelist" v-model="inputAddress" :placeholder="placeholder" autocomplete="off" required @keyup="suggestLocations">

        <!-- suggestions -->
        <datalist id="suggestions">
          <option v-for="(s, index) in suggestions" :value="s.text" :key="index"/>
        </datalist>

        <!-- button -->
        <span class="input-group-append input-group-btn">
          <button class="btn text-white" :class="btnClass" type="submit">
            <i :class="btnIcon"></i>
            <span class="d-none d-sm-inline-block">
              {{ btnText }}
            </span>
          </button>
        </span>

      </div>

      <div class="form-text text-muted">
        <slot>
          <details>
            <summary>Having trouble with this field?</summary>
            <ul>
              <li>
                Provide a street number and street name. <strong>Avoid</strong> using a street suffix (ex. street, st, circle, ave, etc.) in your search.
                <ul>
                  <li>601 e kennedy</li>
                </ul>
              </li>
              <li>When available, use the suggested options displayed as you type.</li>
              <li>Still experiencing problems? <a href="https://hcflgov.formstack.com/forms/website_feedback" target="_blank">Let us know</a>.</li>
            </ul>
          </details>
        </slot>
      </div>
    </div>

  </form>
</template>

<script>
import FormResult from '../models/FormResult'
import Geocoder from '../models/Geocoder'
import debounce from 'lodash.debounce'

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
      this.suggestions = []
      this.$emit('submit', new FormResult(this.inputAddress, this.returnParcelGeometry))
    },
    suggestLocations: debounce(function(e) {
      if (this.inputAddress.length) {
        Geocoder.suggestLocations(this.inputAddress).then(suggestions => {
          this.suggestions = suggestions
        })
      }
    }, 300)
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
