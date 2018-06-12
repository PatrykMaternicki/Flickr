export const Getters = {

 photoCollection() {
   return state.photoColection;
 },

 nameAlbums() {
   let nameAlbums =[];
   state.photoColection.forEach(album => {
     nameAlbums.push(album.nameAlbum);
   });

   return nameAlbums;
 }
}
