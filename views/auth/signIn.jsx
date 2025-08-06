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
                    <div className='form-input-div'>
                        <label htmlFor="email">Email: </label><br />
                        <input class='emailinput'type="email" name="email" /><br />
                    </div>
                    <div className='form-input-div'>
                        <label htmlFor="password">Password: </label><br />
                        <input type="password" name="password" /><br />
                    </div>
                    <input class='loginbtn' type="submit" value="Login" />
                </form>
            </div>
        </Layout >
    )
}

module.exports = SignIn






