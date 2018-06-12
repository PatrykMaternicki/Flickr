export default class Album {
  constructor(nameAlbum = '' , images = []) {
    this.nameAlbum = nameAlbum;
    this.images = images;
 }

 setNameAlbum(nameAlbum) {
  this.nameAlbum = nameAlbum;
 }

  setImage(image) {
    this.images = image;
  }
}
