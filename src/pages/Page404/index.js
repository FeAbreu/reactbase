import React from 'react';
import '../../styles/GlobalStyle.css';
import './style.css';

import videoCode from '../../assets/video-code.mp4';
import videoGif from '../../assets/video.gif';

export default function Page404(){
  return (
      <main className="">
        <div className="relative height-full">
          <div className="video">
            <div className="text-for-video">
              <h1 className="title-left animate__animated animate__fadeInDown animate__delay-1s">
                  <span className="white">Ops...</span>
              </h1>
              <h1 className="title-right animate__animated animate__fadeInUp animate__delay-2s">
                  <span className="white">404</span>
              </h1>
            </div>
            <video src={videoCode} height="100%" autobuffer="true" poster={videoGif} width="100%" preload="auto" loop autostart="true" autoPlay={true}></video>
          </div>
        </div>

      </main>
   )
}
