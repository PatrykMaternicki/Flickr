import {photoColection} from '../data/PhotoCollection.js';
import Album from '../models/Album.js';

export default class PhotoColectionService {

  constructor(){
    this.photoColection = photoColection;
  }

  createAlbum(data) {
    let album = new Album();
    album.setNameAlbum(data.nameAlbum);
    album.setImage(data.urls);
    return album;
  }

  filterByKey(key,photoCollection,pattern) {
    return photoColection.filter(album => {
      return album[key].includes(pattern.trim())});
  }

  getPhotoCollection() {
    return this.photoColection;
  }
}
