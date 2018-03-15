# Hillsborough County Address/Parcel Form

> A Vue.js project

## Installation

### CDN (Browser)

```html
<div id="app">
  <form is="HcAddressParcelForm" @submit="formSearch" @error="formError"></form>
</div>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- set HcAddressParcelForm vue component -->
<script src="https://commbocc.github.io/hc-address-parcel-form/dist/build.var.js"></script>
<script type="text/javascript">
var app = new Vue({
  el: '#app',
  components: {
    HcAddressParcelForm
  },
  data () {
    return {
      formResult: {}
    }
  },
  methods: {
    formSearch (result) {
      this.formResult = result
    },
    formError (err) {
      console.error(err)
    }
  }
})
</script>
```

### NPM

`npm i --save https://github.com/Commbocc/hc-address-parcel-form`

Example [Single File Component](https://vuejs.org/v2/guide/single-file-components.html)

```html
<!-- App.vue -->
<template>
  <section>
    <form is="HcAddressParcelForm" @submit="formSearch" @error="formError"></form>
  </section>
</template>

<script>
import HcAddressParcelForm from 'hc-address-parcel-form'

export default {
  // ...
  components: {
    HcAddressParcelForm
  }
  // ...
}
</script>
```

## Customizations

The `HcAddressParcelForm` component accepts the following properties as options:

* `placeholder` String
* `:return-parcel-geometry` Boolean

The default options are shown below:

```html
<form
is="HcAddressParcelForm"
placeholder="Your Street Address..."
:return-parcel-geometry="false"></form>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
