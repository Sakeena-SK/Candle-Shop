const React = require('react')
const Layout = require('../layouts/layout')

const styles = {
    backgroundColor: 'skyblue',
}
function Show(props){
    return(
        <Layout category={props.category}>
        <div style={styles}>
            <nav class="navbar">
            <div class="categoryProduct">
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            </div></nav>
            <h1>{props.category.name}</h1>
            <a href={`/category/?token=${props.token}`}>Back</a>
            <a href={`/product/?token=${props.token}`}>Products</a>
            <img src={`${props.category.image}`}/>
              <form action={`/category/${props.category._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.category.name}`}/>
            </form>
            <div>
            <a href={`/category/${props.category._id}/edit?token=${props.token}`}><button>{`Edit this ${props.category.name}`}</button></a>
            </div>
        </div></Layout>
    )
}

module.exports = Show