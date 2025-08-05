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
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>Categories</h1>
            <a href={`/category/new?token=${props.token}`}>Create A New Category</a>
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
        <layout>
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>Categories</h1>
            <ul>
                {
                    
                   categories.map((category) => {
                    return (
                        <>
                        <li><a href={`/category/${category._id}/products?token=${props.token}`}>{category.name}</a> <br/> {category.descreption}</li>
                        <li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.descreption}</li>
                        </>
                    )
                   }) 
                }
            </ul>
        </div></layout>
    ) 
    }
}

module.exports = Index






