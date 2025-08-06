const React = require('react')
const Layout = require('../layouts/layout')

function New (props) {
    console.log(props)
    return(
        <Layout>
        <div>
            <nav class="navbar">
                    <nav class="productBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                    </nav>  
                    <nav className='productBar'>
                        <a class="logoutLink" href='/users'>Logout</a>
                    </nav>
            </nav>
            <h1>Products</h1>
            <a href={`/product?token=${props.token}`}>Cancel</a>
            
            <form action={`/product/new/${props.categoryId}?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Price: <input type="text" name="price" /><br/>
                Image: <input type="text" name="image" /><br/>
                <input type="submit" value="Add product" />
            </form>
        </div></Layout>
    )
}

module.exports = New