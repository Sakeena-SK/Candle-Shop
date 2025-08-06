const React = require('react')
const Layout = require('../layouts/layout')

function SignUp (props) {
    return(
        <Layout>
        <div>
            <nav class="navbar">
                <div class="signup">
            <a class="nav-link" href='/'>Home</a>
            <a class="nav-link" href='/users/login'>Login</a>
           </div> </nav>
           <div class="signupBox">
            <h1>Sign Up</h1>
            <form action="/users" method="POST">
                Name: <input type="text" name="name" /><br/>
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                Role: <select name="role" >
                    <option value="owner">owner</option>
                    <option value="customer">customer</option>
                </select><br/>
                <input type="submit" value="Creat Account" />
            </form>
            </div>
        </div>
        </Layout>
    )
}

module.exports = SignUp






