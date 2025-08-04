const React = require('react')

function SignIn (props) {
    return(
        <div>
            <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a>
            <h1>Log In For The Greatest Of All Time</h1>
            <form action="/users/login" method="POST">
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                <input type="submit" value="Submit to Login" />
            </form>
        </div>
    )
}

module.exports = SignIn






