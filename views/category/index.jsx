const React = require('react')

function Index (props){
    const categories = props.categories
    return (
        <div>
            <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a>
            <h1>Index Page</h1>
            <a href={`/category/new?token=${props.token}`}>Create A New Category</a>
            <ul>

                {
                    
                   categories.map((category) => {
                    return (<li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.Descreption}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports = Index






