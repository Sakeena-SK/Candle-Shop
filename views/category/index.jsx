const React = require('react')
const Layout = require('../layouts/layout')

function Index (props){
    const categories = props.categories
        console.log(props)
    console.log(props.data)
    if ( props.user.role === 'owner'){
    return (
        <Layout>
        <div>
            <nav class="navbar">
                    <nav class="categoryBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
            </nav>
            <h1>Categories</h1>
            <a href={`/category/new?token=${props.token}`}>Add Category</a>
            <ul>

                {            
                    
                   categories.map((category) => {
                    return (
                        <>
                            <li><img src={`${category.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                            <li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.descreption}</li>
                            </>
                    )
                   }) 
                }
            </ul>
        </div></Layout>
    )
    }else {
           return (
        <Layout>
        <div>
            <nav class="navbar">
                <div class="categoryProduct">
                    <nav class="categoryBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </div>
            </nav>
            <h1>Categories</h1>
            <ul>
                {
                    
                   categories.map((category) => {
                    return (
                        <>
                            <li><img src={`${category.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                        <li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.descreption}</li>
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






