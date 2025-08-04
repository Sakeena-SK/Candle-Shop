const React = require('react')

function Edit (props) {
    const { name, _id, Descreption } = props.category
    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/category'>Go back to Index Page</a>
            <form action={`/category/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Descreption: <input type="text" name="Descreption" defaultValue={Descreption}/><br/>
            </form>
        </div>
    )
}

module.exports = Edit