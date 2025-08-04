const React = require('react')

function New (props) {
    return(
        <div>
            <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a>
            <h1>Products</h1>
            <a href={`/product?token=${props.token}`}>Cancle</a>
            
            <form action={`/product?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Price: <input type="text" name="price" /><br/>
                Image: <input type="text" name="Image" /><br/>
                <input type="submit" value="Create product" />
            </form>
        </div>
    )
}

module.exports = New