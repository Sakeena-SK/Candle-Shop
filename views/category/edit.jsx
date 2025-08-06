import category from '../../models/category'
const Layout = require('../layouts/layout')

const React = require('react')

function Edit (props) {
    const { name, _id, descreption, image } = props.category
    return(
       <Layout category={props.category}>
        <div>
        <nav class="navbar">
            <nav class="categoryBar">
                <a class="nav-link" href='/'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
            </nav>
            <nav className='categoryBar'>
                <a class="logoutLink" href='/users'>Logout</a>
            </nav>
        </nav>
            <h1 class="catEditHead">{name} Edit Page</h1>
            <form action={`/category/${_id}?_method=PUT&token=${props.token}`} method="POST">
            <div className="catName">
                <label htmlFor="name">Name </label><br />
                <input type="text" name="name" defaultValue={name} /><br/>
            </div>
            <div className='catDis'>
                <label htmlFor="description">Description: </label><br />
                <input type="text" name="descreption" defaultValue={descreption}/><br/>
            </div>
            <div className='Image'>
                <label htmlFor="image">Image: </label><br />
                <input type="text" name="image" defaultValue={image}/><br/>
            </div>
            <div>
                <input type="submit" value="Update" /><a class="back" href='/category'>Back</a>
            </div>
            </form>
        </div></Layout>
    )
        }   


module.exports = Edit