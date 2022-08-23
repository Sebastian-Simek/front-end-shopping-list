import { useState } from 'react';


export default function AuthPage() {

  const [signUpEmail, setSignUpEmail] = useState();
  const [signUpPassword, setSignUpPassword] = useState(); 




  return (
    <div className="auth">
      <form>
        <h2>Sign Up</h2>
        <label>
            Email:
          <input 
            value={signUpEmail}
            type="email"
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <label>
            Password:
            <input
              value={signUpPassword} 
              type="password"
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
          </label>

        </label>
      </form>


    </div>
  );
}
