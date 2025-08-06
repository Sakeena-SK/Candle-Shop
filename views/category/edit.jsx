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
                <nav class="categoryBar">
            <a class="nav-link" href='/layout'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
            </nav></div></nav>
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