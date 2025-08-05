const React = require('react')
const Layout = require('../layouts/layout')

function SignIn (props) {
    return(
        <Layout>
        <div>
            <nav class="navbar">
                <div class="signin">
            <a href='/'>Home</a>
            <a href='/users'>SingUp</a>
            </div></nav>

            <div class="signinBox">
            <h1>Log In</h1>
            <form action="/users/login" method="POST">
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                <input type="submit" value="Login" />
            </form>
                </div>
        </div>
        </Layout>
    )
}

module.exports = SignIn






