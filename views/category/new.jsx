const React = require('react')
const Layout = require('../layouts/layout')

function New (props) {
    return(
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
            <a href={`/category?token=${props.token}`}>Cancel</a>
            
            <form action={`/category?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Descreption: <input type="text" name="descreption" /><br/>
                Image: <input type="text" name="image" /><br/>
                <input type="submit" value="Create Category" />

            
          
            </form>
        </div></Layout>
    )
}

module.exports = New