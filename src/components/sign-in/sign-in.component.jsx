import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ email: '', password: '' });
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2> I have already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} fromGoogleSignIn>
              Google Sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
