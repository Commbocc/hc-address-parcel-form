<template>
  <div id="app">

    <div is="AddressForm" v-on:search="search"></div>

    <pre class="bg-dark text-light p-2">{{ $store.state }}</pre>

  </div>
</template>

<script>
import addressMixin from './mixins/addressMixin'
import AddressForm from '@/components/AddressForm'

export default {
  name: 'app',
  components: {
    AddressForm
  },
  mixins: [
    addressMixin
  ],
  methods: {
    search (input) {
      this.setFormIsSearching(true)
      this.findAddressAndParcel(true).then(() => {
        this.setFormIsSearching(false)
      }).catch(err => {
        this.setFormIsSearching(false)
        // error handler
        console.error(err)
      })
    }
  }
}
</script>
