const React = require('react')
const Layout = require('../layouts/layout')
//const require layout

function Edit (props) {
    const { name, _id, price, image } = props.product
    return(
        <Layout product={props.product}>
        <div>
            <nav class="navbar">
                    <nav class="productBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                    </nav>
                    <nav className='productBar'>
                        <a class="logoutLink" href='/users'>Logout</a>
                    </nav>
            </nav>
            <h1 class="prodEditHead">{name} Edit Product</h1>
            <form action={`/product/${_id}?_method=PUT&token=${props.token}`} method="POST">
                
                <div class="prodEdit">
                    <div className="prodName">
                        <label htmlFor="name">Description: </label><br />
                        <input type="text" name="name" defaultValue={name}/><br/>
                    </div>
                    <div className="prodPrice">
                        <label htmlFor="price">Price: </label><br />
                        <input type="text" name="price" defaultValue={price}/><br/>
                    </div>
                    <div className="prodImage">
                        <label htmlFor="image">Image URL: </label><br />
                        <input type="text" name="image" defaultValue={image}/><br/>
                    </div>
                    <div className="backNupdate">
                        <input class="update" type="submit" value="Update" /><a class="back" href='/product'>Back</a>
                    </div>
                </div>
            </form>
        </div>
        </Layout>
    
    )
}

module.exports = Edit