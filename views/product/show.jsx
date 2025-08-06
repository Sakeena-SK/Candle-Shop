const React = require('react')
const Layout = require('../layouts/layout')

const styles = {
    backgroundColor: 'skyblue',
}
function Show(props){
    if ( props.user.role === 'owner'){
        return(
            <Layout product={props.product}>
                <div style={styles}>
                    <nav class="navbar">
                        <div class="categoryProduct">
                            <nav class="productBar">
                                <a class="nav-link" href='/'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                            </nav>
                        </div>
                    </nav>
                    <h1>{props.category.name}</h1>
                    <a href={`/product/?token=${props.token}`}>Back</a>
                    <a href={`/product/?token=${props.token}`}>Products</a>
                    <img src={`${props.product.image}`}/>
                    <form action={`/product/${props.product._id}?_method=DELETE&token=${props.token}`} method="POST">
                    <input type="submit" value={`Delete this ${props.product.name}`}/>
                    </form>
                        <div>
                            <a href={`/product/${props.product._id}/edit?token=${props.token}`}><button>{`Edit this ${props.product.name}`}</button></a>
                        </div>
                </div>
            </Layout>
        )   
    }else {
        return(
            <Layout product={props.product}>
                <div style={styles}>
                    <nav class="navbar">
                        <div class="categoryProduct">
                            <nav class="productBar">
                                <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                            </nav>
                        </div>
                    </nav>
                    <h1>{props.category.name}</h1>
                    <a href={`/product/?token=${props.token}`}>Back</a>
                </div>
            </Layout>
        )
    }
}

module.exports = Show