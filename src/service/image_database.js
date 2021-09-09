import { firebaseDatabase } from './firebase';

class ImageDatabase {
  syncImages(files) {
    const ref = firebaseDatabase.ref(`Image/`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && files(value);
    })
    return () => ref.off();
  }

  saveImage(id, url) {
    firebaseDatabase.ref(`Image/${id}`).set(url);
   
    
  }

  removeImage(id) {
    firebaseDatabase.ref(`Image/${id}`).remove();
  }
}





export default ImageDatabase;

