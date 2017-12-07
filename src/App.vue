<template>
  <div id="app">

    <div is="AddressForm" v-on:search="search"></div>

    <pre class="bg-dark text-light p-2">{{ $store.state }}</pre>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import AddressForm from '@/components/AddressForm'

export default {
  name: 'app',
  components: {
    AddressForm
  },
  methods: {
    search (searchInput) {
      this.setFormIsSearching(true)
      this.findAddressAndParcel(searchInput).then(() => {
        this.setFormIsSearching(false)
      }).catch(err => {
        this.setFormIsSearching(false)
        // error handler
        console.error(err)
      })
    },
    ...mapActions([
      'findAddressAndParcel'
    ]),
    ...mapMutations([
      'setFormIsSearching'
    ])
  },
  computed: mapState({
    folio: state => state.address.parcel.folio
  })
}
</script>
