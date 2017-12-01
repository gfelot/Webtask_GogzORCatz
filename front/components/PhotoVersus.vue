<template>
  <main class="hero-body">
    <div class="container is-fluid photo-versus">
      <div class="columns">
        <div class="my-gif column is-offset-2 is-3 is-square">
          <img :src="getURL.dog" alt="">
        </div>
          <figure class="column is-2 image is-128x128">
            <img src="~/static/VS-MK.png">
          </figure>
        <div class="my-gif column is-3 is-square">
          <img :src="getURL.cat" alt="">
        </div>
      </div>

      <div class="columns">
        <div class="column is-offset-3 is-1">
          <button class="button is-success" @click="selectItem('dog', getURL.dog)">
            WooF!!!
          </button>
        </div>
        <div class="column is-offset-1 is-2">
          <h2 class="title has-text-white-bis has-text-centered">
            {{getScore.dog}} - {{getScore.cat}}
          </h2>
        </div>
        <div class="my-gif column is-offset-1 is-1">
          <button class="button is-success" @click="selectItem('cat', getURL.cat)">
            ! MEOW !
          </button>
        </div>
      </div>
    </div>
    <modal v-if="showModal" :animal="animal" @close="showModal = false"/>
    <!-- <button class="button" @click="test">
      Test
    </button> -->
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'
import Modal from '~/components/Modal.vue'

export default {
  data () {
    return {
      showModal: false,
      animal: false
    }
  },
  components: {
    Modal
  },
  computed: {
    ...mapGetters([
      'getScore',
      'getURL',
      'getFav'
    ])
  },
  async mounted () {
    this.getRandomDog()
    this.getRandomCat()
  },
  methods: {
    ...mapMutations([
      'reinitScore',
      'changeDogScore',
      'changeCatScore',
      'changeDogURL',
      'changeCatURL',
      'addToFav'
    ]),
    async selectItem (animal, url) {
      switch (animal) {
        case 'dog':
          this.changeDogScore()
          break
        case 'cat':
          this.changeCatScore()
          break
        default:
          break
      }
      const dogScore = this.getScore.dog
      const catScore = this.getScore.cat
      if (dogScore === 5 || catScore === 5) {
        if (dogScore === 5) {
          this.animal = true
        } else {
          this.animal = false
        }
        this.reinitScore()
        this.showModal = true
      }
      this.addToFav(url)
      this.getRandomDog()
      this.getRandomCat()
    },
    async getRandomDog () {
      const {data} = (await axios.get('https://api.giphy.com/v1/gifs/random?api_key=gsWL6RLJt2gHmpDBVMa8xTTSvgMOBGYw&tag=dog')).data
      this.changeDogURL(data.image_url)
    },
    async getRandomCat () {
      const {data} = (await axios.get('https://api.giphy.com/v1/gifs/random?api_key=gsWL6RLJt2gHmpDBVMa8xTTSvgMOBGYw&tag=cat')).data
      this.changeCatURL(data.image_url)
    }
    // test () {
    //   console.log(this.getFav)
    // }
  }
}
</script>

<style lang="scss" scoped>
// .photo-versus {
// }
// .my-gif {
//   // background-color: whitesmoke;
// }
</style>
