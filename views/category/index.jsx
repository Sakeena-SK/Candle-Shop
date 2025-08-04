const React = require('react')

function Index (props){
    const categories = props.categories
    return (
        <div>
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






