const React = require('react')
const Layout = require('../layouts/layout')

function SignIn(props) {
    return (
        <Layout>
            <div>
                <nav class="navbar">
                    <div class="signin">
                        <a class="nav-link" href='/'>Home</a>
                        <a class="nav-link" href='/users'>SignUp</a>
                    </div>
                </nav>
            </div>

            <div class="signinBox">
                <h1 class="loginFont">Log In</h1>
                <form action="/users/login" method="POST">
                    Email: <input class='emailinput'type="email" name="email" /><br />
                    Password: <input type="password" name="password" /><br />
                    <input class='loginbtn' type="submit" value="Login" />
                </form>
            </div>
        </Layout >
    )
}

module.exports = SignIn






