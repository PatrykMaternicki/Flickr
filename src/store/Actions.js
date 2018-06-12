export const Actions = {

 setPhotoColection(context, payload) {
   context.commit('SET_ALBUM', payload);
 },

 removePhotoColection(context,payload) {
   context.commit('REMOVE_ALBUM', payload);
 }
}
