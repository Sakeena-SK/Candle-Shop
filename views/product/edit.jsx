const React = require('react')
const Layout = require('../layouts/layout')
//const require layout

function Edit (props) {
    const { name, _id, price, image } = props.product
    return(
        <Layout product={props.product}>
        <div>
            <nav class="navbar">
                <div class="categoryProduct">
                    <nav class="productBar">
                        <a class="nav-link" href='/layout'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </div>
            </nav>
            <h1>{name} Edit Product</h1>
            <a href='/product'>Back</a>
            <form action={`/product/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name}/><br/>
                Price: <input type="text" name="price" defaultValue={price}/><br/>
                Image: <input type="text" name="image" defaultValue={image}/><br/>
                <input type="submit" value="Update product" />
            </form>
        </div>
        </Layout>
    
    )
}

module.exports = Edit