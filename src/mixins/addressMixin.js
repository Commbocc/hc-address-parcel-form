import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  methods: {
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
