const React = require('react')

function SignIn(props) {
  return (
    <div>
      <h1>Owner Login</h1>
      <form action="/owners/login" method="POST">
        Email: <input type="email" name="email" /><br/>
        Password: <input type="password" name="password" /><br/>
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

module.exports = SignIn
