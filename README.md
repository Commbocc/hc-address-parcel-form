# Hillsborough County Address/Parcel Form

> A Vue.js project

## Installation

Install in browser or via NPM.

### CDN (Browser)

```html
<div id="app">
  <form is="HcAddressParcelForm" @submit="formSearch" @error="formError"></form>
  <pre>{{ formResult }}</pre>
</div>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- set HcAddressParcelForm vue component -->
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
    formSearch: function formSearch(result) {
      this.formResult = result;
    },
    formError: function formError(err) {
      console.error(err);
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
    <form is="HcAddressParcelForm" @submit="formSearch" @error="formError"></form>
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
