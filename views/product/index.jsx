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
                <div class="categoryProduct">
                    <nav class="productBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </div>
            </nav>
            <h1>products</h1>
            <a href={`/product/new/${props.categoryId}?token=${props.token}`}>Add product</a>
            <ul>

                {
                    
                   products.map((product) => {
                    return (
                    <>
                        <li><img src={`${product.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                        <li><a href={`/product/${product.id}?token=${props.token}`}>{product.name}</a> <br/> {product.descreption}</li>
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
                <div class="categoryProduct">
                    <nav class="productBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </div>
            </nav>
            <h1>product Page</h1>
            <ul>
                {
                    
                   products.map((product) => {
                    return (
                    <>
                        <li><img src={`${product.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                        <li><a href={`/product/${product.id}?token=${props.token}`}>{product.name}</a> <br/> {product.descreption}</li>
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






