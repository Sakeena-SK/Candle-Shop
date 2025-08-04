const React = require('react')

const styles = {
    backgroundColor: 'skyblue',
}
function Show(props){
    return(
        <div style={styles}>
            <h1>{props.category.name}</h1>
            <a href={`/categories/?token=${props.token}`}>Go back to Index Page</a>
            <p>
                The {props.category.name} is {props.category.Descreption}
            </p>
              <form action={`/categories/${props.category._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.category.name}`}/>
            </form>
            <div>
            <a href={`/categories/${props.category._id}/edit?token=${props.token}`}><button>{`Edit this ${props.category.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show