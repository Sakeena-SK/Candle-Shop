const React = require('react')
const Layout = require('../layouts/layout')

function Show(props){
     if ( props.user.role === 'owner'){
    return(
        <Layout category={props.category}>
        <div>
            <nav class="navbar">
                <div class="categoryProduct">
                    <nav class="categoryBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </div>
            </nav>
            <h1>{props.category.name}</h1>
            <a href={`/category/?token=${props.token}`}>Back</a>
            <a href={`/category/${props.category._id}/products?token=${props.token}`}>Products</a>
            <img src={`${props.category.image}`}/>
              <form action={`/category/${props.category._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.category.name}`}/>
            </form>
            <div>
            <a href={`/category/${props.category._id}/edit?token=${props.token}`}><button>{`Edit this ${props.category.name}`}</button></a>
            </div>
        </div></Layout>
    )
}else {
    return(
        <Layout>
            <div>
                <nav class="navbar">
                    <div class="categoryProduct">
                        <nav class="categoryBar">
                            <a class="nav-link" href='/'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                        </nav>
                    </div>
            </nav>
            <h1>{props.category.name}</h1>
            <a href={`/category/?token=${props.token}`}>Back</a>
            </div>
            </Layout>
        )
    }
}

module.exports = Show