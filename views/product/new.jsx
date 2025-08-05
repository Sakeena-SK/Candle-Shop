const React = require('react')
const Layout = require('../layouts/layout')

function New (props) {
    return(
        <Layout>
        <div>
            <nav class="navbar">
              <div class="categoryProduct">
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
                </div>
            </nav>
            <h1>Products</h1>
            <a href={`/product?token=${props.token}`}>Cancel</a>
            
            <form action={`/product?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Price: <input type="text" name="price" /><br/>
                Image: <input type="text" name="Image" /><br/>
                <input type="submit" value="Add product" />
            </form>
        </div></Layout>
    )
}

module.exports = New