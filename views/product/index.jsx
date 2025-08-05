const React = require('react')

function Index (props){
    const products = props.products
    if (props.user.role === 'owner') {
    return (
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>product Page</h1>
            <a href={`/product/new?token=${props.token}`}>Create A New product</a>
            <ul>

                {
                    
                   products.map((product) => {
                    return (<li><a href={`/product/${product.id}?token=${props.token}`}>{product.name}</a> <br/> {product.price}</li>)
                   }) 
                }
            </ul>
        </div>
    )
    } else {
        return (
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>product Page</h1>
            <ul>
                {
                    
                   products.map((product) => {
                    return (<li><a href={`/product/${product.id}?token=${props.token}`}>{product.name}</a> <br/> {product.price}</li>)
                   }) 
                }
            </ul>
        </div>
    )
    }
}

module.exports = Index






