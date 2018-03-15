<template lang="html">
  <form @submit.prevent="submitForm">

    <div class="form-group">
      <div class="input-group input-group-lg">

        <input class="form-control" v-model="inputAddress" :placeholder="placeholder" autocomplete="off" required>

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

export default {
  name: 'address-form',
  data () {
    return {
      inputAddress: '',
      isSearching: false
    }
  },
  methods: {
    submitForm () {
      this.isSearching = true
      var result = new FormResult(this.inputAddress)
      result.findAddressLocation().then(() => {
        return result.findParcel(this.returnParcelGeometry)
      }).catch(err => {
        this.$emit('error', err)
      }).then(() => {
        this.$emit('submit', result)
        this.isSearching = false
      })
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
