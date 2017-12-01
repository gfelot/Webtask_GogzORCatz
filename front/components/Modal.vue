<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      
      <div class="box" v-if="animal">
        <h1 class="title is-4 has-text-grey-darker">
          So you prefere the goods boys ?
        </h1>
        <h2 class="subtitle has-text-grey-darker">
          Give me your email and I will send you the gifs that you choose.
        </h2>
        <input class="input" type="email" placeholder="Email" v-model="email">
        <h3 class="title is-5 has-text-success has-text-centered mail-send" v-if="send">
          Email Sended. You can go back to work !
        </h3>
        <div class="columns send-button">
          <div class="column is-2 is-offset-5">
            <button class="button is-warning" :class="{ 'is-loading': loading }" @click="sendMail">
              <i class="fa fa-paper-plane" aria-hidden="true"></i> Send
            </button>
          </div>
        </div>
      </div>

      <div class="box" v-else>
        <h1 class="title is-4 has-text-grey-darker">
          You are a cat dude, huh !
        </h1>
        <h2 class="subtitle has-text-grey-darker">
          Give me your email and I will send you the gifs that you choose.
        </h2>
        <input class="input" type="email" placeholder="Email" v-model="email">
        <h3 class="title is-5 has-text-success has-text-centered mail-send" v-if="send">
          Email Sended. You can go back to work !
        </h3>
        <div class="columns send-button">
          <div class="column is-2 is-offset-5">
            <button class="button is-warning" :class="{ 'is-loading': loading }" @click="sendMail">
              <i class="fa fa-paper-plane" aria-hidden="true"></i> Send
            </button>
          </div>
        </div>
      </div>

    </div>
    <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: '',
      loading: false,
      send: false
    }
  },
  props: ['animal'],
  computed: {
    ...mapGetters([
      'getFav'
    ])
  },
  methods: {
    async sendMail () {
      this.loading = true
      const {data} = await axios.post('https://wt-47e76048be8a8a8ec265b7ec76d7beba-0.run.webtask.io/sendMail', {
        email: this.email,
        data: this.getFav
      })
      if (data === 'Email sent with data') {
        this.send = true
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.send-button {
  padding-top: 20px;
}
.mail-send {
  padding-top: 20px;
}
</style>

