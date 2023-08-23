import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <h2>Login Form</h2>

        <form action="" method="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>

        <p>
          No account yet? Please register <a href="/register">here</a>
        </p>
      </div>
    </>
  );
}

export default App;
