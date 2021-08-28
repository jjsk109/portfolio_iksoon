import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './myDropzone.module.css'

const MyDropzone = ({imageUploader, onFileChange}) => {
console.log("MyDropzone ref")
  const onDrop =  useCallback(( acceptedFiles) => {
        acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = async event => {
          const uploaded =  await imageUploader.upload(file);

          console.log("uploaded :",uploaded);
          const time =  Date.now();
          onFileChange({
            id:time,
            url: uploaded.url,
          });
        }
        reader.readAsArrayBuffer(file)
        
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

