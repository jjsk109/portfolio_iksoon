import React from 'react';

const ImgGallery = ({file}) => {
    console.log("ImgGallery",file);
    return(
        <div>
            <img src={file.url} alt="" />
        </div>
    )
}

export default ImgGallery;