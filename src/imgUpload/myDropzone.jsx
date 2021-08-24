import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './myDropzone.module.css'

const MyDropzone = ({imageUploader, onFileChange}) => {
  console.log(imageUploader);
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일

  const onDrop =  useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          console.log("onload",file);
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        reader.readAsArrayBuffer(file)
    
    
        imageUploader.upload(file)
        .then(console.log)
        onFileChange({
          name: 'fileName',
          url: 'url'
        })
      })
      
      
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
   
  

  return (
 
    <div {...getRootProps()} className={ styles.zoon }>
      
      <input {...getInputProps()}/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      
    </div>
   
  )
}
export default MyDropzone;

