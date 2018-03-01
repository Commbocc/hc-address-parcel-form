# Hillsborough County Address/Parcel Form

> A Vue.js project

* [Vue](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/en/)

## Basic Use

```bash
npm install --save https://github.com/Commbocc/hc-address-parcel-form
```

```js
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

import address from 'hc-address-parcel-form/src/store/modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    address
  }
})
```

```js
// mixins/addressMixin.js
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
```

```vue
<!-- App.vue -->
<template>
  <div>
    <div is="AddressForm" v-on:search="search"></div>
  </div>
</template>

<script>
import addressMixin from './mixins/addressMixin'
import AddressForm from 'hc-address-parcel-form/src/components/AddressForm'

export default {
  components: {
    AddressForm
  },
  mixins: [addressMixin],
  methods: {
    search (input) {
      this.setFormIsSearching(true)
      this.findAddressAndParcel(true).then(() => {
        // do something here
        console.log(this.folio)
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
