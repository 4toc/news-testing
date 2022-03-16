import { createStore } from 'vuex'
import { LoremIpsum } from "lorem-ipsum";
import { randomInteger } from '../utils/utils';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const store = createStore({
  state () {
    return {
      count: 0,
      newsData: [],
      search: '',
      isSortAscending: false,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    
    generateData(state) {
      state.newsData = []
      for (let i = 1; i < 9; i++) {
        const item = {
          title: lorem.generateWords(6),
          image: new URL(`../assets/images/Rectangle${i}.png`, import.meta.url).href,
          origin: 'CNN Indonesia',
          date: new Date(2022, randomInteger(0,1), randomInteger(0,28)),
          text: lorem.generateWords(42)
        }
        state.newsData.push(item)
        this.commit('makeSort')
      }
    },
    
    changeSortState(state) {
      state.isSortAscending = !state.isSortAscending
      this.commit('makeSort')
    },
    
    makeSort(state) {
        if (state.isSortAscending) {
          state.newsData.sort((a,b)=>a.date.getTime()-b.date.getTime())
        } else {
          state.newsData.sort((a,b)=>a.date.getTime()-b.date.getTime()).reverse()
        }
    },
    
    setSearch(state, searchPhrase) {
      state.search = searchPhrase
    }
  },
  
  getters: {
    getNewsData (state) {
      
      return state.newsData.filter(el => el.title.toLowerCase().includes(state.search.toLowerCase()))
    },
    
    getIsSortAscending(state) {
      return state.isSortAscending
    }
  }
})

export default store
