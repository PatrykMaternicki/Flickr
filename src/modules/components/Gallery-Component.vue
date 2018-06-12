<template>
  <div>
    <div>
    <b-dropdown id="ddown1" :text="textButton" class="m-md-2">
      <b-dropdown-item-button @click="setAlbum" v-for="album in photoCollection" :key="album">
        {{album}}
      </b-dropdown-item-button>
    </b-dropdown>
    <b-button v-if="pickAlbum" @click="showPresentation" type="button" variant="primary">Show Presentation</b-button>
      <div class="itemContainer">
        <template  v-for="image in images">
          <div class="item" :style="{ backgroundImage: `url(${image})`}">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'GalleryComponent',

  data () {
    return {
      pickAlbum: false,
      textButton: 'pick photo collection',
      activePresentation: false
    }
  },

  computed: {
    photoCollection () {
      return this.$store.getters.nameAlbums;
    },

    images() {
      if (this.pickAlbum) {
         return this.$store.getters.images;
      }
    }
  },

  methods: {
    setAlbum(e) {
      this.pickAlbum = true;
      this.textButton = e.target.innerHTML;
      this.$store.dispatch('pickPhotoCollection', e.target.innerHTML);
    },

    showPresentation() {
      this.$store.dispatch('runPresentation', true);
    }

  }

}
</script>
<style lang="scss">
  .itemContainer {
    margin-left: -10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .item {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    flex: 33.3%;
    display: block;
    margin: 20px;
    float: left;
    padding-bottom: 33.3%;
  }
</style>
