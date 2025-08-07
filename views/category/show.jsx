const React = require('react')
const Layout = require('../layouts/layout')

function Show(props){
     if ( props.user.role === 'owner'){
    return(
        <Layout category={props.category}>
        <div>
            <nav class="navbar">
                    <nav class="categoryBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                    </nav>
                    <nav className='categoryBar'>
                        <a class="logoutLink" href='/users'>Logout</a>
                    </nav>
            </nav>
            <h1 class="catShowHead">{props.category.name}</h1>
              <form action={`/category/${props.category._id}?_method=DELETE&token=${props.token}`} method="POST">
            <div class="show">
                <a class="backCat" href={`/category/?token=${props.token}`}>Back</a>
                <a class="prodCat" href={`/category/${props.category._id}/products?token=${props.token}`}>Products</a>
                <input class="deleteCat" type="submit" value={`Delete Category`}/>
                <a class="editCat" href={`/category/${props.category._id}/edit?token=${props.token}`}>Edit Category</a>
            </div>
            <img class="imageSow" src={`${props.category.image}`} className="categorySowImage" />
                
            </form>
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
            <h1 class="catShowHead">{props.category.name}</h1>
            <a href={`/category/?token=${props.token}`}>Back</a>
            </div>
            </Layout>
        )
    }
}

module.exports = Show