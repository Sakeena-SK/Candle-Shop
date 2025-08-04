const React = require('react')


function SignUp (props) {
    return(
        <layout>
        <div>
            {/* <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a> */}
            <h1>Sign Up For The Greatest Of All Time</h1>
            <form action="/users" method="POST">
                Name: <input type="text" name="name" /><br/>
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                Role: <select name="role" >
                    <option value="owner">owner</option>
                    <option value="customer">customer</option>
                </select><br/>
                <input type="submit" value="Submit to Register" />
            </form>
        </div>
        </layout>
    )
}

module.exports = SignUp






