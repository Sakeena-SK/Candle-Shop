const React = require('react')

function Show(props){
 return(
    <html>
        <body>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <div className="container">
                {props.children}
            </div>
        </body>
    </html>
 )
}

module.exports = Show