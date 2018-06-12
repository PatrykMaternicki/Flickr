import Service from '../service/PhotoCollection-Service.js';

const service = new Service();

export const State = {
  photoColection: service.getPhotoCollection(),
}
