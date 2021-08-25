
const Imgupload = ({FileInput}) => {
  const onFileChange = file => {
    console.log("file",file);
  }
  return (
    <div>
      <h3>이미지 업로드</h3>
     
      <FileInput onFileChange={onFileChange}/>
      <div style={{ height: '50vh', width: '40%' }}>
          {/* <Gallery photos={photos} />; */}
      </div>
    </div>
  );
    
}

export default Imgupload;