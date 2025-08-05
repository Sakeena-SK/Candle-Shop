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
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            </div></nav>
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