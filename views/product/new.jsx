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
            <h1 class="prodNewHead">Products</h1>
            <form action={`/product/new/${props.categoryId}?token=${props.token}`} method="POST">
            
                <div class="prodEdit">
                    <div className="prodName">
                        <label htmlFor="name">Description: </label><br />
                        <input type="text" name="name" /><br/>
                    </div>
                    <div className="prodPrice">
                        <label htmlFor="price">Price: </label><br />
                        <input type="text" name="price" /><br/>
                    </div>
                    <div className="prodImage">
                        <label htmlFor="image">Image URL: </label><br />
                        <input type="text" name="image" /><br/>
                    </div>
                    <div className="backNupdate">
                        <input class="update" type="submit" value="Creat Product" /><a class="back" href={`/product?token=${props.token}`}>Back</a>
                    </div>
                </div>
            </form>
        </div></Layout>
    )
}

module.exports = New