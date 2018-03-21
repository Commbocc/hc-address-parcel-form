# Hillsborough County Address/Parcel Form

> A Vue.js project

## Installation

Install in browser or via NPM.

### CDN (Browser)

```html
<div id="app">
  <form is="HcAddressParcelForm" @submit="formSearch"></form>
  <pre>{{ formResult }}</pre>
</div>

<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- set HcAddressParcelForm Vue component -->
<script src="https://commbocc.github.io/hc-address-parcel-form/dist/build.var.js"></script>

<script type="text/javascript">
'use strict';

var app = new Vue({
  el: '#app',
  components: {
    HcAddressParcelForm: HcAddressParcelForm
  },
  data: function data() {
    return {
      formResult: {}
    };
  },
  methods: {
    formSearch: function formSearch(promise) {
      promise.then(result => {
        this.formResult = result;
        // result => {
        //   "inputAddress": "601 E KENNEDY, TAMPA",
        //   "locationData": {
        //     "spatialReference": {
        //       "latestWkid": 2237,
        //       "wkid": 102659
        //     },
        //     "x": 509330.5265903396,
        //     "y": 1314191.6308060843
        //   },
        //   "parcelData": {
        //     "folio": "1935570000",
        //     "address": "601 E KENNEDY BLVD",
        //     "geometry": null
        //   },
        //   "errors": []
        // }
        this.formResult.errors.forEach(err => {throw err;});
      }).catch(err => {
        console.error(err);
      });
    }
  }
});
</script>
```

### NPM

`npm i --save https://github.com/Commbocc/hc-address-parcel-form`

Example [Single File Component](https://vuejs.org/v2/guide/single-file-components.html)

```html
<!-- App.vue -->
<template>
  <main>
    <form is="HcAddressParcelForm" @submit="formSearch"></form>
  </main>
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

The default values are shown below:

```html
<form is="HcAddressParcelForm"
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
