import { useActionState, useContext, useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer';
import Nav from '../../../Shared/Nav';
import './Login.css';
import Forgotpassword from './ForgotPassword';
import { Link } from 'react-router';
import { AuthContext } from '../../../MyContexts/AuthContext';
import Redirect from '../../../Redirect';
import {UiContext} from '../../../MyContexts/UiContext'

export default function Login() {

  const {
    signIn,
  } = useContext(AuthContext)

  const {
    showPopup,
  } = useContext(UiContext)

  const [showFrgtnPswd, setShowFrgtnPswd] = useState(false)

  const [
    signInResp,
    signInAction,
    isSigningIn
  ] = useActionState(signIn, { success: null, message: '' })

  useEffect(() => {
    if (isSigningIn) {
      showPopup('pending', 'Signing in', false)
    }
  }, [isSigningIn])

  useEffect(() => {
    console.log(signInResp);
    
  }, [signInResp])
  

  

  return (
    <Redirect>
      <Nav currentPage={'login'} />
      {
        !showFrgtnPswd ?
          <main class="login-main-content">
            <div class="login-card">
              <h1 class="login-title">Member Portal Login</h1>
              <form action={signInAction}>
                <div class="login-form-group">
                  <label class="login-form-label" for="email">Email</label>
                  <input class="login-form-input" id="email" name="email" placeholder="Enter your email"
                    required type="email" />
                </div>
                <div class="login-form-group">
                  <label class="login-form-label" for="password">Password</label>
                  <input class="login-form-input" id="password" name="password" placeholder="Enter your password"
                    required type="password" />
                </div>
                <button class="btn-login" type="submit">Login</button>
              </form>
              <div class="links-container">
                <button
                  class="auth-link"
                  onClick={() => {
                    setShowFrgtnPswd(true)
                  }}
                >
                  Forgot Password?
                </button>
                <Link to={'/members/registration'} class="auth-link">Not registered? Join the Association</Link>
              </div>
            </div>
          </main>
          : <Forgotpassword setShowFrgtnPswd={setShowFrgtnPswd} />
      }
      <Footer />
    </Redirect>

  );
};