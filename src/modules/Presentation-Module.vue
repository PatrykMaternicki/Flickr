<template>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                :img-height="400"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="photo in photoGallery">
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="photo" alt="image slot"/>
      </b-carousel-slide>
      <b-button class="fixed" @click="closePresentation" type="button" variant="warning">Close</b-button>
    </b-carousel>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'PresentationModule',
  data () {
    return {
      slide: 0,
      sliding: null,
      windowHeight: window.innerHeight,
    }
  },

  computed: {
    photoGallery() {
      return this.$store.getters.images;
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },

    onSlideEnd (slide) {
      this.sliding = false
    },

    closePresentation() {
      this.$store.dispatch('runPresentation', false);
    }
  }
}
</script>
<style lang="scss">
  .w-100 {
    width: 100vw !important;
    height: 100vh !important;
  }

  .fixed {
    position: absolute;
    top: 25px;
    right: 200px;
  }


</style>
