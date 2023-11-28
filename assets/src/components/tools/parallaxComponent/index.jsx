import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxComponent = () => {
  const imageSrc = 'https://static.wixstatic.com/media/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg/v1/fill/w_1903,h_953,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg'; // Remplacez par le chemin de votre image

  return (
    <Parallax bgImage={imageSrc} strength={1000} bgImageSizes={{}}>
      <div style={{ height: '1000px', maxWidth: '75px', opacity: '.5', top: '0px' }}> {/* Ajustez la hauteur selon vos besoins */}
        <div style={{ textAlign: 'center', padding: '200px 0'}}>
          <h1 style={{ color: 'white' }}>Votre texte par-dessus l'image</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;
