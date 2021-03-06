import React from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';
import Nav from '../../components/nav/nav.component';
import Footer from '../../components/footer/footer.component';

function Signup() {
  return (
    <div class="sign-up">
      <Nav />
      <div className='sign-up-body'>
        <div
          class="signupcontainer text-center"
          style={{  }}
        >
          <h1>Sign Up</h1>
          <form>
            <div class="form-group">
              <label for="Email1">Email</label>
              <input type="email" className="form-control " id="Email1" />
            </div>
            <div class="form-group">
              <label for="Email2">Confirm email</label>
              <input type="email" class="form-control" id="Email2" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="password1" />
            </div>
            <div class="form-group">
              <label for="password2">Confirm Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button
              type="submit"
              class="btn btn-danger"
              style={{ background: '#FF0000', width: '100%', marginTop: '10px' }}
            >
              Sign Up
            </button>
            <p style={{ color: '#808584' }}>
              already have an account? <Link to="/sign-in">Sign in</Link> instead
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Signup;
