<template>
  <div class="container-fluid">
    <div class="row">
      <FormsModule v-if="!startPresentation" />
      <PresentationModule v-if="startPresentation" />
    </div>
  </div>
</template>

<script>
import FormsModule from './modules/Forms-Module.vue';
import PresentationModule from './modules/Presentation-Module.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  data () {
    return {

    }
  },

  computed: {
    startPresentation(){
      console.log(this.$store.getters.startPresentation);
      return this.$store.getters.startPresentation;
    }
  },

  components: {
    FormsModule,
    PresentationModule
  }
}
</script>

<style lang="scss">
.container-fluid {
  height: 100vh;
}
</style>
