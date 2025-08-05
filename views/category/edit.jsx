import category from '../../models/category'
const Layout = require('../layouts/layout')

const React = require('react')

function Edit (props) {
    const { name, _id, descreption, image } = props.category
    return(
       <Layout category={props.category}>
        <div>
        <nav class="navbar">
            <div class="categoryProduct">
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            </div></nav>
            <h1>{name} Edit Page</h1>
            <a href='/category'>Cancel</a>
            <form action={`/category/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Descreption: <input type="text" name="descreption" defaultValue={descreption}/><br/>
                Image: <input type="text" name="image" defaultValue={image}/><br/>
                <input type="submit" value="Update" />
            </form>
        </div></Layout>
    )
        }   


module.exports = Edit