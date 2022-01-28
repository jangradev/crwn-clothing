import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (props) => {
  return (
    <button
      className={`${props.fromGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props.otherProps}
    >
      {props.children}
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
