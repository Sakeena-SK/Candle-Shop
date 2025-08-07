const React = require('react')
const Layout = require('../layouts/layout')
function Index (props){
    const products = props.products
    console.log(props)
    if (props.user.role === 'owner') {
    return (
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
            <h1 class="prodIndexHead">Products</h1>
            <a class="addProd" href={`/product/new/${props.categoryId}?token=${props.token}`}>Add product</a>
            <ul className='theproductbox2'>

                {
                    
                   products.map((product) => {
                    return (
                    <>
                        <li className="product-box">
                        <img src={`${product.image}?token=${props.token}`} className="product-image" alt={product.name} />
                        <div className="product-content">
                            <a href={`/product/${product.id}?token=${props.token}`} className="product-name">
                            {product.name}
                            </a>
                            <p className="product-description">{product.descreption}</p>
                        </div>
                        </li>

                    </>
                    )
                    
                   }) 
                }
            </ul>
        </div></Layout>
    )
    } else {
        return (
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
            <h1 class="prodIndexHead">Products</h1>
            <ul>
                {
                    
                   products.map((product) => {
                    return (
                    <>
                        <li className="product-box">
                        <img src={`${product.image}?token=${props.token}`} className="product-image" alt={product.name} />
                        <div className="product-content">
                            <a href={`/product/${product.id}?token=${props.token}`} className="product-name">
                            {product.name}
                            </a>
                            <p className="product-description">{product.descreption}</p>
                        </div>
                        </li>

                    </>
                    )
                   }) 
                }
            </ul>
        </div></Layout>
    )
    }
}

module.exports = Index






