<template>
  <div id="app">

    <form is="AddressForm" @submit="formSearch" @error="formError"></form>

    <pre class="bg-dark text-light p-2">{{ formResult }}</pre>

  </div>
</template>

<script>
import AddressForm from './components/AddressForm'

export default {
  name: 'app',
  components: {
    AddressForm
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
}
</script>
