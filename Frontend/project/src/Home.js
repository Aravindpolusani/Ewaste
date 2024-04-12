import React from 'react';
import ScrollingMessage from './ScrollingMessage';
import Icon from './Icon';

function HomePage() {
  

  return (
    <div className='content'>
     
        <div className='videoplayer'>
          <ScrollingMessage />
          <Icon />
        </div>
     
    </div>
  );
}

export default HomePage;
