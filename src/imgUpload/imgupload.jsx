import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class Imgupload extends Component {
    state = {
        photos:[
            {
                src: 'https://res.cloudinary.com/dpwxqv19q/image/upload/v1624592245/dmeje1ioinvojpwjfh82.jpg',
                width: 4,
                height: 3
              },
              {
                src: 'https://res.cloudinary.com/dpwxqv19q/image/upload/v1624592204/qf3kfwykgkpk2xmblp6g.jpg',
                width: 1,
                height: 1
              },
              {
                src: 'https://res.cloudinary.com/dpwxqv19q/image/upload/v1624592159/vyahlkyp6oknmjpmkl0x.jpg',
                width: 2,
                height: 1
              },
              {
                src: 'https://res.cloudinary.com/dpwxqv19q/image/upload/v1623765717/htv4taazvsmuzy3fsuf3.jpg',
                width: 1,
                height: 1
              },
              {
                src: 'https://res.cloudinary.com/dpwxqv19q/image/upload/v1623765484/zmtdebzzljsvlk8uwk2g.jpg',
                width: 1,
                height: 1
              },
            
        ]
    }
    render() {
        return (
            <div style={{ height: '50vh', width: '40%' }}>
                <Gallery photos={this.state.photos} />;
            </div>
        );
    }
}

export default Imgupload;