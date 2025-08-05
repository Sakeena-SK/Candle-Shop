const React = require('react')

function New (props) {
    if (User.role === 'owner') {
    return(
        <layout>
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>Categories</h1>
            <a href={`/category?token=${props.token}`}>Cancle</a>
            
            <form action={`/category?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Descreption: <input type="text" name="descreption" /><br/>
                Image: <input type="text" name="Image" /><br/>
                <input type="submit" value="Create Category" />
            </form>
        </div></layout>
    )
    } else {
        return //index.jsx
    }
}

module.exports = New