const React = require('react')

function New (props) {
    return(
        <div>
            <h1>Categories</h1>
            <a href={`/category?token=${props.token}`}>Cancle</a>
            <form action={`/category?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Descreption: <input type="text" name="descreption" /><br/>
                Image: <input type="text" name="Image" /><br/>
                <input type="submit" value="Create Category" />
            </form>
        </div>
    )
}

module.exports = New