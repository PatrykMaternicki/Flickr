<template>
  <b-form>
    <b-form-group
      id="labelPhotoColection"
      label="Write name in photo collection"
      label-for="photoColection"
    >
    <b-form-input
        id="photoColection"
        type="text"
        v-model="form.photoColection"
        required
        placeholder="My holidays photo"
      />
    </b-form-group>

    <b-form-group
      id="labelUrl"
      label="Url your photo"
      label-for="url"
    >
      <b-form-input
        id="exampleInput2"
        type="text"
        v-model="form.url"
        required
        placeholder="https://images3.alphacoders.com/113/thumb-1920-113445.jpg"
      />
      <b-button type="button" @click="addPhotoUrl" variant="primary">Add</b-button>
      <b-button type="button" @click="addPhotoCollection" variant="primary">Add photo collection</b-button>
      <ul if="addedUrl">
        <li v-for="url in urls" :key="url">
          {{url}}
        </li>
      </ul>
    </b-form-group>
  </b-form>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  name: 'FormComponent',
  data () {
    return {
      form: {
        photoColection: '',
        url: ''
      },
      addedUrl: false,
      urls: [],
    }
  },

  methods: {
    addPhotoUrl() {
      this.urls.push(this.form.url);
      this.form.url='';
      this.addedUrl = true;
    },



    addPhotoCollection(){
      let data = {
        nameAlbum: this.form.photoColection,
        urls: this.urls,
      }
      this.form.photoColection = '';
      this.urls = [];
      this.$store.dispatch('setPhotoCollection', data);
    }
  }
}
</script>
<style lang="scss">
  .cell {
    height: 100vh;
  }
</style>
