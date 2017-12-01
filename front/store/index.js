import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      score: {
        dog: 0,
        cat: 0
      },
      url: {
        dog: '',
        cat: ''
      },
      fav: []
    },
    mutations: { // commit
      reinitScore (state) {
        state.score.dog = 0
        state.score.cat = 0
      },
      changeDogScore (state) {
        state.score.dog++
      },
      changeCatScore (state) {
        state.score.cat++
      },
      changeDogURL (state, url) {
        state.url.dog = url
      },
      changeCatURL (state, url) {
        state.url.cat = url
      },
      addToFav (state, url) {
        state.fav.push(url)
      }
    },
    getters: {
      getScore: state => state.score,
      getURL: state => state.url,
      getFav: state => state.fav
    },
    actions: { // dispatch
    }
  })
}

export default createStore
