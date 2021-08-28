import { useEffect } from "react";
import { useState } from "react";
import ImgGallery from "./imgGallery";

const Imgupload = ({FileInput,imageDatabase}) => {
  //const [photos, setFile] = useState({ src: '', width: 1,height:1 });

  const [files, setFile] = useState([
  ]);
  console.log("files",files);
  const onFileChange = file => {
    console.log("file",file);
    const updated = [...files, file];
    console.log("update",updated);
    setFile(updated);

    const stopSync = imageDatabase.syncImages();
  }

  useEffect(() => {
    console.log("useEffect start")
  })
  return (
    <div>
      <h3>이미지 업로드</h3>
      <FileInput onFileChange={onFileChange}/>
      <div style={{ height: '50vh', width: '40%' }}>
      {files.map(file => (
        <ImgGallery file={file}/>
      ))}
       
      
      </div>
    </div>
  );
    
}

export default Imgupload;