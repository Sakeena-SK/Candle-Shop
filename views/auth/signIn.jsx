const React = require('react')
const Layout = require('../layouts/layout')

function SignIn(props) {
    return (
        <Layout>
            <div>
                <nav className="navbar">
                    <div className="signin">
                        <a className="nav-link" href='/'>Home</a>
                        <a className="nav-link" href='/users'>SignUp</a>
                    </div>
                </nav>
            </div>

            <div className="signinBox">
                <h1 className="loginFont">Log In</h1>
                <form action="/users/login" method="POST">
                    <div className='form-input-div'>
                        <label htmlFor="email">Email: </label><br />
                        <input className='emailinput'type="email" name="email" /><br />
                    </div>
                    <div className='form-input-div'>
                        <label htmlFor="password">Password: </label><br />
                        <input type="password" name="password" /><br />
                    </div>
                    <input className='loginbtn' type="submit" value="Login" />
                </form>
            </div>
        </Layout >
    )
}

module.exports = SignIn






