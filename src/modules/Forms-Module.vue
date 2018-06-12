<template>
  <div class="col-sm-12 col-md-6 cell">
    <h1> Flicker </h1>
    <p>
      Create your beutifull gallery and show your:</p>
      <ul>
        <li>Friends</li>
        <li>Familly</li>
        <li>Buddies</li>
      </ul>
      <b-button @click="show('forms')" type="button" variant="primary">Create your photoGallery</b-button>
      <b-button @click="show('photoGallery')" type="button" variant="primary">Show photoGallery</b-button>
      <component @showAlbum = "showAlbum" :is="currentView"> </component>
  </div>
</template>
<script>
import FormComponent from './components/Form-Component.vue';
import GalleryComponent from './components/Gallery-Component.vue';
import GalleryPresentationComponent from './components/Gallery-Component.vue';

export default {
  name: 'FormsModule',
  data () {
    return {
      currentView: '',
    }
  },

  methods: {
    show(state) {
      this.currentView = state == 'forms' ? 'FormComponent' : 'GalleryComponent';
    },

    showAlbum(nameComponent) {
      this.currentView = nameComponent;
    }
  },

  components: {
    FormComponent,
    GalleryComponent,
    GalleryPresentationComponent
  }
}
</script>
<style lang="scss">
  .fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .cell {
    height: 100vh;
  }
</style>
