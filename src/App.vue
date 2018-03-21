<template>
  <div id="app">

    <form is="AddressForm" @submit="formSearch"></form>

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
    formSearch (promise) {
      promise.then(result => {
        this.formResult = result
        this.formResult.errors.forEach(err => {
          throw err
        })
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
