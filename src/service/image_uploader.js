class ImageUploader {
    async upload(file){
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'laweu6ql');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dpwxqv19q/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
   // console.log('result.json()',result.json());
    return await result.json();
    }
}

export default ImageUploader;