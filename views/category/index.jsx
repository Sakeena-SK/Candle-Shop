const React = require('react')

function Index (props){
    const categories = props.categories
        console.log(props)
    console.log(props.data)
    if ( User.role === 'owner'){
    return (
        <layout>
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>Categories</h1>
            <a href={`/category/new?token=${props.token}`}>Create A New Category</a>
            <ul>

                {
                    
                   categories.map((category) => {
                    return (<li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.Descreption}</li>)
                   }) 
                }
            </ul>
        </div></layout>
    )
    }else {
           return (
        <layout>
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>Categories</h1>
            <ul>
                {
                    
                   categories.map((category) => {
                    return (<li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.Descreption}</li>)
                   }) 
                }
            </ul>
        </div></layout>
    ) 
    }
}

module.exports = Index






