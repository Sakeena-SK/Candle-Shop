const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Fruit Page</h1>
            <a href={`/category?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/category?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Descreption: <input type="text" name="Descreption" /><br/>
                <input type="submit" value="Create Category" />
            </form>
        </div>
    )
}

module.exports = New