import { firebaseDatabase } from './firebase';

class ImageDatabase {
  syncImages() {
    
    return "";
  }
  saveImage(id, url) {
    //firebaseDatabase.ref(`${id}`).set(url);
  }

  removeImage(id, url) {
    //firebaseDatabase.ref(`${id}`).remove();
  }
}

export default ImageDatabase;