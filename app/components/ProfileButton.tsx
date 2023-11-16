// ProfileButton.tsx
import React from 'react';

const ProfileButton = () => {
  const navigateToProfile = () => {
    window.location.href = '/profile';
  };

  return <button onClick={navigateToProfile}>Profile</button>;
};

export default ProfileButton;
