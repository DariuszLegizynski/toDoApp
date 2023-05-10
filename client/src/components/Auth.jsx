import { useState } from 'react'

const Auth = () => {
  const [ isLogIn, setIsLogIn ] = useState(true)
  const [ error, setError ] = useState("")

const viewLogin = status => {
  setError("")
  setIsLogIn(status)
}

  return (
    <article className="auth-container">
      <section className="auth-conatiner-box">
        <form>
          <h2>{ isLogIn ? "Please log in" : "Please sign up"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogIn && <input type="password"  placeholder="confirm password" />}
          <input type="submit" className="create" />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLogIn ? 'rgb(255. 255, 255)' : 'rgb(188, 188, 188'}}>Sign Up</button>
          <button onClick={() => viewLogin(true)} style={{backgroundColor : isLogIn ? 'rgb(255. 255, 255)' : 'rgb(188, 188, 188'}}>Login</button>
        </div>
      </section>
    </article>
  )
}

export default Auth