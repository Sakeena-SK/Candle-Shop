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
            <h1 class="signupFont">Sign Up</h1>
            <form action="/users" method="POST">
            <div className='form-input-div'>
                    <label htmlFor="name">Name: </label><br />
                    <input type="text" name="name" /><br/>
            </div>
            <div className='form-input-div'>
                    <label htmlFor="email">Email: </label><br />
                    <input type="email" name="email" /><br/>
            </div>
            <div className='form-input-div'>
                    <label htmlFor="password">Password: </label><br />
                    <input type="password" name="password" /><br/>
            </div>
            <div className='form-input-div'>
                    <label htmlFor="role">Role: </label><br />
                    <select name="role" >
                    <option value="owner">owner</option>
                    <option value="customer">customer</option>
                </select><br/>
            </div>
                <input type="submit" value="Creat Account" />
            </form>
            </div>
        </div>
        </Layout>
    )
}

module.exports = SignUp






