import Vue from 'vue'
import Vuex from 'vuex'
import {
  lightbox
} from './events/lightbox';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lightbox: []
  },
  mutations: {
    [lightbox.LIGHTBOX_ADD] (state, image) {
      state.lightbox.push(image);
    },
    [lightbox.LIGHTBOX_REMOVE] (state, item) {
      state.lightbox.splice( state.lightbox.findIndex( v => v.id != item.id ), 1 );
    },
    [lightbox.LIGHTBOX_EMPTY] (state) {
      state.lightbox = [];
    }
  },
  actions: {
    [lightbox.LIGHTBOX_REMOVE] ({commit}, image) {
      commit(lightbox.LIGHTBOX_REMOVE, image);
    },
    [lightbox.LIGHTBOX_ADD] ({commit}, image) {
      commit(lightbox.LIGHTBOX_ADD, image);
    },
    [lightbox.LIGHTBOX_EMPTY] ({commit}) {
      commit(lightbox.LIGHTBOX_EMPTY);
    },
  },
  getters: {
    lightBoxSize: state => {
      return state.lightbox.length;
    },
    lightBoxContains: (state) => (image) => {
      return state.lightbox.find( v => (v.id==image.id) );
    }
  }
})
