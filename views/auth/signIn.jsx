const React = require('react')

function SignIn (props) {
    return(
        <layout>
        <div>
            {/* <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a> */}
            <a href='/'>Home</a>
            <a href='/users'>SingUp</a>

            <h1>Log In For The Greatest Of All Time</h1>
            <form action="/users/login" method="POST">
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                <input type="submit" value="Submit to Login" />
            </form>
        </div>
        </layout>
    )
}

module.exports = SignIn






