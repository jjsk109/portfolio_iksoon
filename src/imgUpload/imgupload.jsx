import { useEffect } from "react";
import { useState } from "react";
import ImgGallery from "./imgGallery/imgGallery";
import styles from './imgupload.module.css';

const Imgupload = ({FileInput,imageDatabase}) => {
 
  const [files, setFile] = useState({});
 
  useEffect(() => {
    imageDatabase.syncImages(files =>{
      setFile(files);
    });
  },[ imageDatabase]);

  const onFileChange = file => {
    setFile(files => {
      const updated = {...files};
      updated[file.id] = file.url;
      return updated;
    })
    imageDatabase.saveImage(file.id,file.url);
  }

  useEffect(() => {
   
  })
  return (
    <div>
      <h3>이미지 업로드</h3>
      <FileInput onFileChange={onFileChange}/>
      <div className={styles.gallery}>
      {Object.keys(files).map(key => (
        <ImgGallery key={key} file={files[key]}/>
      ))}
      </div>
    </div>
  );
    
}

export default Imgupload;