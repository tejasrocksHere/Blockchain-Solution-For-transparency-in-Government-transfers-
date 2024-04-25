import React, { useRef, useEffect } from 'react';
import './Home.css';
import backgroundvdo from './backgroundvdo.mp4';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.currentTime = 20;
        videoRef.current.play();
        setTimeout(() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 40;
        }, 20000);
      });
    }
  }, []);

  return (
    <>
      <div className="div1">
        <video
          className="video-background"
          autoPlay
          muted
          loop
          ref={videoRef}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        >
          <source src={backgroundvdo} type="video/mp4" />
        </video>
        <div className="p1">
          <p className="p1_1">Transparent😊And Corruption-Free👩‍💻 Transfer👍</p>
        </div>
      </div>
    </>
  );
}

export default Home;
