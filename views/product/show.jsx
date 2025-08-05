const React = require('react')
const Layout = require('../layouts/layout')

function Show(props){
 return(
    <html><Layout product={props.product}>
        <body>
            <nav class="navbar">              
                <div class="categoryProduct">
                    <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
                </div>
            </nav>
            <div className="container">
                {props.children}
            </div>
        </body></Layout>
    </html>
 )
}

module.exports = Show