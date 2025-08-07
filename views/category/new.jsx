const React = require('react')
const Layout = require('../layouts/layout')

function New (props) {
    return(
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
            <h1 class="catNewHead">Categories</h1>
            <form action={`/category?token=${props.token}`} method="POST">

            <div class="catEdit">
                <div className="catName">
                    <label htmlFor="name">Name: </label><br />
                    <input type="text" name="name" /><br/>
                </div>
                <div className="catName">
                    <label htmlFor="description">Description: </label><br />
                    <input type="text" name="descreption" /><br/>
                </div>
                <div className="catName">
                    <label htmlFor="image">Image URL: </label><br />
                    <input type="text" name="image" /><br/>
                </div>
                <div className="backNupdate">
                    <input class="create" type="submit" value="Create Category" /><a class="back" href={`/category?token=${props.token}`}>Back</a>
                </div>
            </div>
            
          
            </form>
        </div></Layout>
    )
}

module.exports = New