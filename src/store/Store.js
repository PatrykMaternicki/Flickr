import Vue from 'vue'
import Vuex from 'vuex'
import PhotoCollectionService from '../service/PhotoCollection-Service.js';

Vue.use(Vuex);
const photoCollectionService = new PhotoCollectionService();

const state = {
  photoColection: photoCollectionService.getPhotoCollection(),
  pickedCollection: '',
  applicationState: {
    PRESENTATION_RUNNING: false,
  }
}

const getters = {

  photoCollection() {
    return state.photoColection;
  },

  nameAlbums() {
    let nameAlbums =[];
    state.photoColection.forEach(album => {
      nameAlbums.push(album.nameAlbum);
    });

    return nameAlbums;
  },

  images() {
    return state.pickedCollection[0].images;
  },

  startPresentation() {
    return state.applicationState.PRESENTATION_RUNNING;
  }
}

const mutations = {

  SET_ALBUM(state, payload) {
    state.photoColection.push(photoCollectionService.createAlbum(payload));
  },

  REMOVE_ALBUM(state, payload) {
    state.photoColection = photoCollectionService.removeAlbum(payload);
  },

  GET_ALBUM(state,payload) {
    state.pickedCollection = photoCollectionService.filterByKey('nameAlbum', state.photoColection, payload);
  },

  START_PRESENTATION(state,payload) {
    state.applicationState.PRESENTATION_RUNNING = payload;
  }

}

const actions = {

  setPhotoCollection(context, payload) {
    context.commit('SET_ALBUM', payload);
  },

  pickPhotoCollection(context, payload) {
    context.commit('GET_ALBUM', payload);
  },

  removePhotoColection(context, payload) {
    context.commit('REMOVE_ALBUM', payload);
  },

  runPresentation(context, payload) {
    context.commit('START_PRESENTATION', payload);
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
 })
