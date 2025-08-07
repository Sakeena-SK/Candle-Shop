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
                    <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                </nav>
                <nav className='categoryBar'>
                    <a class="logoutLink" href='/users'>Logout</a>
                </nav>
            </nav>
            <h1 class="catIndexHead">Categories</h1>
            <a class="addCat" href={`/category/new?token=${props.token}`}>Add Category</a>
            <ul>

                {            
                    
                   categories.map((category) => {
                    return (
                        <>
                       <li className="category-box">
                            <img src={`${category.image}?token=${props.token}`} className="category-image" alt={category.name} />
                            <div className="category-content">
                                <a href={`/category/${category.id}?token=${props.token}`} className="category-name">
                                {category.name}
                                </a>
                                <p className="category-description">{category.descreption}</p>
                            </div>
                        </li>

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
                    <nav class="categoryBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                    </nav>
                    <nav className='categoryBar'>
                        <a class="logoutLink" href='/users'>Logout</a>
                    </nav>
            </nav>
            <h1 class="catIndexHead">Categories</h1>
            <ul>
                {
                    
                   categories.map((category) => {
                    return (
                        <>
                       <li className="category-box">
                            <img src={`${category.image}?token=${props.token}`} className="category-image" alt={category.name} />
                            <div className="category-content">
                                <a href={`/category/${category.id}?token=${props.token}`} className="category-name">
                                {category.name}
                                </a>
                                <p className="category-description">{category.descreption}</p>
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






