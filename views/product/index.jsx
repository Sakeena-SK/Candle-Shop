const React = require('react')

function Index (props){
    const products = props.products
    return (
        <div>
            {/* <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a> */}
            <h1>Index Page</h1>
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
}

module.exports = Index






