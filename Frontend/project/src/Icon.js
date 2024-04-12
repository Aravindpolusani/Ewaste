import React from 'react';
import './Icon.css';

function Icon() {
  const socialMediaActions = [
    { iconClass: 'fab fa-facebook-f', color: '#3b5998', link: 'https://www.facebook.com/' },
    { iconClass: 'fab fa-instagram-square', color: 'rgb(228, 64, 95)', link: 'https://www.instagram.com/' },
    { iconClass: 'fab fa-twitter', color: '#1da1f2', link: 'https://twitter.com/' },
    { iconClass: 'fab fa-youtube', color: 'red', link: 'https://www.youtube.com/' },
    { iconClass: 'fa-brands fa-whatsapp', color: 'lightgreen', link: 'https://web.whatsapp.com/' }
  ];

  return (
    <div className="icons-container">
        <h4>Follow us :</h4>
      {socialMediaActions.map((action, index) => (
        <a key={index} href={action.link} target="_blank" rel="noopener noreferrer">
          <i className={action.iconClass} style={{ color: action.color }}></i>
        </a>
      ))}
    </div>
  );
}

export default Icon;
