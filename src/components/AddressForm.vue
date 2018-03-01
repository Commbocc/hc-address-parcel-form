<template lang="html">
  <form @submit.prevent="search">

    <div class="form-group">

      <div class="input-group input-group-lg">
        <input class="form-control" v-model="input" :placeholder="placeholder" autocomplete="off" required>
        <span class="input-group-btn">
          <button class="btn text-white" :class="btnClass" type="submit">
            <i :class="btnIcon"></i>
            <span class="d-none d-sm-inline-block">
              {{ btnText }}
            </span>
          </button>
        </span>
      </div>

      <small v-if="helpText" class="form-text text-muted">
        {{ helpText }}
      </small>

    </div>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'address-form',
  data () {
    return {
      placeholder: 'Your Street Address...',
      helpText: null
    }
  },
  computed: {
    ...mapState({
      addressInput: state => state.address.input,
      searching: state => state.address.searching
    }),
    input: {
      get () {
        return this.addressInput
      },
      set (value) {
        this.setInput(value)
      }
    },
    btnText () {
      // return (this.searching) ? 'Loading' : 'Find'
      return 'Find'
    },
    btnClass () {
      return (this.searching) ? 'btn-warning' : 'btn-secondary'
    },
    btnIcon () {
      return (this.searching) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
    }
  },
  methods: {
    ...mapMutations(['setInput']),
    search () {
      this.$emit('search', this.input)
    }
  }
}
</script>
