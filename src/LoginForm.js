import React, {useState} from "react";


const LoginForm = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [IsLoggedIn,setIsLoggedIn]=useState(false);

    const handleLogin= (e)=>{
        e.preventDefault();

        //Handle login logic here (authentication,api calls,etc.)
        setIsLoggedIn(true)
        console.log("Email:",email);
        console.log("Password:",password);
    };
    return (
      <div className="login-form-container">
        {IsLoggedIn ? (
          <h2>Welcome,{email}!</h2>
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </div>
    );
};

export default LoginForm;