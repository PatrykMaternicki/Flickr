import Service from '../service/PhotoCollection-Service.js';

const service = new Service();

export const Mutations = {

 SET_ALBUM(state, payload) {
   state.photoColection.push(payload)
 },

 REMOVE_ALBUM(state, payload) {
   state.photoColection = service.removeAlbum(state.photoColection, payload);
 }

}
