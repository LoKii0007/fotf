function generateKeyframes(isMobile) {
    const keyframes = `
      @keyframes layer1-anime {
        0%, 93.75% {
          width: ${isMobile ? '250px' : '450px'};
        }
        6.25%, 12.5% {
          width: ${isMobile ? '210px' : '700px'};
        }
        18.75%, 25% {
          width: ${isMobile ? '170px' : '900px'};
        }
        31.25%, 37.5% {
          width: ${isMobile ? '130px' : '1050px'};
        }
        43.75%, 87.25% {
          width: ${isMobile ? '90px' : '1150px'};
        }
      }
    `;
  
    return isMobile ? keyframes.replace(/layer1-anime/g, 'layer1-anime-mobile') : keyframes;
  }