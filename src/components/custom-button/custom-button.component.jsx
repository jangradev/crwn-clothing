import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, fromGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''}${
        fromGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

/* {
  children,
  fromGoogleSignIn,
  fromSignUpComponent,
  ...otherProps
}*/
